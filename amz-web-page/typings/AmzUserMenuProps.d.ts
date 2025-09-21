/**
 * This file was generated from AmzWebPage.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue, EditableValue } from "mendix";

export interface AmzWebPageContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    userDisplayName: EditableValue<string>;
    changeLanuage?: ActionValue;
    showProfile?: ActionValue;
    changePassword?: ActionValue;
    customSettings?: ActionValue;
    txtAccountProfile: DynamicValue<string>;
}

export interface AmzWebPagePreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode: "design" | "xray" | "structure";
    translate: (text: string) => string;
    userDisplayName: string;
    changeLanuage: {} | null;
    showProfile: {} | null;
    changePassword: {} | null;
    customSettings: {} | null;
    txtAccountProfile: string;
}
