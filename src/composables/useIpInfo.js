import { ref } from 'vue';

const ipAddress = ref('');
const ipInfo = ref({});
let fetched = false;

export function useIpInfo() {
  // get ip data
  const getIpData = async () => {
    try {
      const res = await fetch(`https://ipapi.co/${ipAddress.value}/json/`);
      
      ipInfo.value = await res.json();
      console.log(ipInfo.value);
    } catch (error) {
      console.error('Failed to get IP data:', error);
    }
  };

  // get ip address
  const getIpAddress = async () => {
    try {
      const res = await fetch('https://api.ipify.org?format=json');
      const data = await res.json();

      ipAddress.value = data.ip;
      console.log(ipAddress.value);
      await getIpData();
    } catch (error) {
      console.error('Failed to get IP:', error);
    }
  };

  // initialize ip info
  const initIpInfo = async () => {
    if (!fetched) {
      fetched = true;
      await getIpAddress();
    }
  };

  return { ipAddress, ipInfo, initIpInfo };
}
