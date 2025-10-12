/**
 * This file was generated from AmzChatBox.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue, ListValue, ListActionValue, ListAttributeValue } from "mendix";
import { Big } from "big.js";

export interface AmzChatBoxContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    dsTopNotify?: ListValue;
    attKey?: ListAttributeValue<Big | string>;
    actReadNotify?: ListActionValue;
    actMarkAllAsRead?: ActionValue;
    optThemeTokens?: DynamicValue<string>;
    txtInputPlaceholder?: DynamicValue<string>;
}

export interface AmzChatBoxPreviewProps {
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
    dsTopNotify: {} | { caption: string } | { type: string } | null;
    attKey: string;
    actReadNotify: {} | null;
    actMarkAllAsRead: {} | null;
    optThemeTokens: string;
    txtInputPlaceholder: string;
}
