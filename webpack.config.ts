import { Configuration } from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import path from "path";
const config: Configuration = {
    mode: "production",
    entry: {
        app: "./index.ts",
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist/"),
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ["awesome-typescript-loader"],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 2048,
                    },
                },
            },
        ],
    },
    plugins: [new HTMLWebpackPlugin({ template: path.resolve(__dirname, "public/index.html") })],
};

export default config;
