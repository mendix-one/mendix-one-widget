/**
 * This file was generated from AmzWebApp.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";

export interface ContextType {
    settings: string;
    showLeftSidebar: boolean;
}

export interface ContextPreviewType {
    settings: string;
    showLeftSidebar: boolean;
}

export interface AmzWebAppContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    context: ContextType[];
    logo?: ReactNode;
    navbar?: ReactNode;
    notify?: ReactNode;
    tasks?: ReactNode;
    user?: ReactNode;
    sidebar?: ReactNode;
    content?: ReactNode;
}

export interface AmzWebAppPreviewProps {
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
    context: ContextPreviewType[];
    logo: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    navbar: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    notify: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    tasks: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    user: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    sidebar: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    content: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
}
