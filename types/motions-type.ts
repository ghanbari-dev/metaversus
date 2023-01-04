import { Variants } from "framer-motion";

export type showVariantsType = Variants;

export type slideInType = (
  direction: any,
  type: any,
  delay: any,
  duration: any
) => Variants;

export type staggerContainerType = (
  staggerChildren?: any,
  delayChildren?: any
) => Variants;

export type textVariantType = (delay: any) => Variants;

export type textContainerType = Variants;

export type textVariant2Type = Variants;

export type fadeInType = (
  direction: any,
  type: any,
  delay: any,
  duration: any
) => Variants;

export type planetVariantsType = (direction: any) => Variants;

export type zoomInType = (delay: any, duration: any) => Variants;

export type footerVariantsType = Variants;
