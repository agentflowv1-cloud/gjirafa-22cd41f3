import create from 'zustand';

interface Store {
  data: any;
  error: any;
}

const useStore = create<Store>()((set) => ({
  data: {},
  error: null,
}));

export { useStore };