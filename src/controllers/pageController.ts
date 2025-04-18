import { Request, Response } from "express";

export const home = (req: Request, re: Response) => {
  re.send("home no controller");
  //res.render('pages/page')
};
export const dogs = (req: Request, re: Response) => {
  //res.render('pages/page')
};
export const cats = (req: Request, re: Response) => {
  //res.render('pages/page')
};
export const fishes = (req: Request, re: Response) => {
  //res.render('pages/page')
};
