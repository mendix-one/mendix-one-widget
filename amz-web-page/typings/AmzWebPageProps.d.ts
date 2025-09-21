/**
 * This file was generated from AmzWebPage.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";
import { DynamicValue } from "mendix";

export interface AmzWebPageContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    settings?: DynamicValue<string>;
    logo?: ReactNode;
    navbar?: ReactNode;
    tasks?: ReactNode;
    notify?: ReactNode;
    user?: ReactNode;
    sidebar?: ReactNode;
    content?: ReactNode;
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
    settings: string;
    logo: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    navbar: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    tasks: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    notify: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    user: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    sidebar: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    content: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
}
