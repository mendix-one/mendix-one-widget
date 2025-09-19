import { ReactElement, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";

import { AmzWebAppContainerProps } from "../typings/AmzWebAppProps";

import "./ui/AmzWebApp.css";

export function AmzWebApp({ sampleText }: AmzWebAppContainerProps): ReactElement {
    return <HelloWorldSample sampleText={sampleText ? sampleText : "World"} />;
}
