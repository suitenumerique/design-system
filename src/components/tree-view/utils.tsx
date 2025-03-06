import { TreeViewDataType, TreeViewNodeTypeEnum } from "./types";

export const isSeparator = <T,>(node?: TreeViewDataType<T>): boolean => {
  if (!node) {
    return false;
  }
  return node.type === TreeViewNodeTypeEnum.SEPARATOR;
};

export const isTitle = <T,>(node?: TreeViewDataType<T>): boolean => {
  if (!node) {
    return false;
  }
  return node.type === TreeViewNodeTypeEnum.TITLE;
};

export const isNode = <T,>(node?: TreeViewDataType<T>): boolean => {
  return !isSeparator(node) && !isTitle(node);
};
