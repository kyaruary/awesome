import "./assets/index.css";

const canvas = document.querySelector("#canvas") as HTMLCanvasElement;

const ctx = canvas.getContext("2d")!;

class Petal {
    x: number;
    y: number;
}
