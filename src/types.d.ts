declare const process: {
  env: {
    NODE_ENV: 'production' | 'development';
    BUILD_ENV: 'production' | 'development';
  };
};

declare interface CustomUIConfig {
  temporaryScheduleHandle: ScheduleID;
}

declare interface PanoramaPanelNameMap {
  TabButton: Panel,
  TabContents: Panel,
  DOTAParticleScenePanel: ScenePanel,
}
declare interface HeroImage extends ImagePanel {
  persona: string;
}

declare interface DollarStatic {
  /**
   * @param properties An object with XML-style properties added to the created panel.
   * @example
   * $.CreatePanel("Label", $.GetContextPanel(), "id", {
   *     class: "MyClass",
   *     text: "Button",
   *     onactivate: "$.Msg('Button Pressed')",
   * });
   */
  CreatePanel<K extends keyof PanoramaPanelNameMap>(
    type: K,
    root: PanelBase,
    id: string,
    properties?: Record<string, any>,
  ): PanoramaPanelNameMap[K];
  CreatePanel(type: string, root: PanelBase, id: string, properties?: Record<string, any>): Panel;
}