/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MAINTENANCEMODE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
