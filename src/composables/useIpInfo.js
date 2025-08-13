import { ref } from 'vue';

const ipAddress = ref('');
const ipInfo = ref({});
let fetched = false;

export function useIpInfo() {
  const loadFromSession = () => {
    const storedIp = sessionStorage.getItem('ipAddress');
    const storedInfo = sessionStorage.getItem('ipInfo');

    if (storedIp && storedInfo) {
      ipAddress.value = storedIp;
      ipInfo.value = JSON.parse(storedInfo);
      fetched = true;
      return true;
    }
    return false;
  };

  const saveToSession = () => {
    sessionStorage.setItem('ipAddress', ipAddress.value);
    sessionStorage.setItem('ipInfo', JSON.stringify(ipInfo.value));
  };

  const getIpData = async () => {
    try {
      const res = await fetch(`https://ipapi.co/${ipAddress.value}/json/`);

      ipInfo.value = await res.json();
      saveToSession();
      console.log('IP Info:', ipInfo.value);
    } catch (error) {
      console.error('Failed to get IP data:', error);
    }
  };

  const getIpAddress = async () => {
    try {
      const res = await fetch('https://api.ipify.org?format=json');
      const data = await res.json();

      ipAddress.value = data.ip;
      await getIpData();
    } catch (error) {
      console.error('Failed to get IP:', error);
    }
  };

  const initIpInfo = async () => {
    if (!fetched) {
      if (!loadFromSession()) {
        fetched = true;
        await getIpAddress();
      }
    }
  };

  return { ipAddress, ipInfo, initIpInfo };
}
