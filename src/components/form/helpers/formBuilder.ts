type TFormMetaData = {
  NAME: string;
  EXTERNAL_NAME: string;
  ENTITY_ID: string;
  SUBSCRIBABLE: string;
  CREATABLE: string;
  UPDATABLE: string;
  DELETABLE: string;
  PAGEABLE: string;
  ADDRESSABLE: string;
  ATTRIBUTE_STRUCT: string;
  TYPE: string;
  FREETEXT_SEARCH: string;
  FILTER_REQUIRED: string;
  SET_NAMES: string[];
  PROPERTIES: TProperties[];
};

type TProperties = {
  NAME: string;
  EXTERNAL_NAME: string;
  ENTITY_ID: string;
  LENGTH: number;
  CORE_TYPE: string;
  IS_OPTIONAL: string;
  IS_READ_ONLY: string;
  CREATABLE: string;
  FILTERABLE: string;
  SORTABLE: string;
  INTERNAL_TYPE: string;
  INTERNAL_LENGTH: number;
  LABEL: string;
};

export function formBuilder(form: TFormMetaData) {}
