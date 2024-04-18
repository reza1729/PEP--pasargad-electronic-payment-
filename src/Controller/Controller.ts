import { overlapCheck } from "../Class/overlap";
import { getAll, saveRectangle } from "../Repository/rectangle.repository";

//#region interfaces
const result = (data = {}, message = "Wrong", code = 500, success = false) => {
  return {
    code,
    message,
    data,
    success,
  };
};
export interface IRectangle {
  x: number;
  y: number;
  width: number;
  height: number;
}
interface input {
  main: IRectangle;
  input: [IRectangle];
}
//#endregion

export default class Controller {
  public async Set(body: input): Promise<any> {
    body.input.forEach((element) => {
      if (overlapCheck(body.main, element)) {
        saveRectangle(element);
      }
    });
    return result({}, "All Proper rectangles Saved", 200, true);
  }
  public async Get(): Promise<any> {
    return await getAll();
  }
}
