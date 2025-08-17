import { useToast } from 'vue-toastification';

const toast = useToast();

const ToastService = {
  success(msg, opts = {}) {
    toast.success(msg, opts);
  },
  error(msg, opts = {}) {
    toast.error(msg, opts)
  },
  warning(msg, opts = {}) {
    toast.warning(msg, opts)
  },
  info(msg, opts = {}) {
    toast.info(msg, opts)
  },
};

export default ToastService;