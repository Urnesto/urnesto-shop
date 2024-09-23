export interface ISvgShape {
  image: string;
  shape: IShape;
}
export type IShape = "hyberboloid" | "pentagonal" | "square";
