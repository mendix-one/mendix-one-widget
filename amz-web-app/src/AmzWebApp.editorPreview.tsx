import { ReactElement, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { AmzWebAppPreviewProps } from "../typings/AmzWebAppProps";

export function preview({ sampleText }: AmzWebAppPreviewProps): ReactElement {
    return <HelloWorldSample sampleText={sampleText} />;
}

export function getPreviewCss(): string {
    return require("./ui/AmzWebApp.css");
}
