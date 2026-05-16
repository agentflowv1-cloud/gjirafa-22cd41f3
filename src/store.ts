import create from 'zustand';

interface MenuStore {
  menus: any[];
  addMenu: (menu: any) => void;
  removeMenu: (id: number) => void;
  editMenu: (id: number, menu: any) => void;
}

const useStore = create<MenuStore>()((set) => ({
  menus: [],
  addMenu: (menu) => set((state) => ({ menus: [...state.menus, menu] })),
  removeMenu: (id) => set((state) => ({ menus: state.menus.filter((menu) => menu.id !== id) })),
  editMenu: (id, menu) => set((state) => ({ menus: state.menus.map((m) => (m.id === id ? menu : m)) })),
}));

export { useStore };