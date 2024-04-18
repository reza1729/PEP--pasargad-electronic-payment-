import { IRectangle } from "../Controller/Controller";

export function overlapCheck(main: IRectangle, input: IRectangle) {
    let mainRight = main.x + main.width;
    let mainBottom = main.y + main.height;
    let inputRight = input.x + input.width;
    let inputBottom = input.y + input.height;
  
    if (
      main.x < inputRight &&
      mainRight > input.x &&
      main.y < inputBottom &&
      mainBottom > input.y
    ) {
      return true;
    }
    return false;
  }