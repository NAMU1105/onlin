import { createContext } from "react";

export const ImageContext = createContext({
  DUMMY_IMAGES: null,
  totalImageCount: null,
  Container: null,
  viewType: null,
  changeViewTypeHandler: () => {},
});
