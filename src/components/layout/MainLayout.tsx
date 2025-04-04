import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { Header } from "./header/Header";
import { LeftPanel } from "./left-panel/LeftPanel";

import { useResponsive } from ":/hooks/useResponsive";
import {
  ImperativePanelHandle,
  Panel,
  PanelGroup,
  PanelResizeHandle,
} from "react-resizable-panels";
import { DropdownMenuOption } from "../dropdown-menu/types";
import { RightPanel } from "./right-panel/RightPanel";

export type MainLayoutProps = {
  icon?: React.ReactNode;
  leftPanelContent?: React.ReactNode;
  rightPanelContent?: React.ReactNode;
  rightHeaderContent?: React.ReactNode;
  languages?: DropdownMenuOption[];
  onToggleRightPanel?: () => void;
  enableResize?: boolean;
  rightPanelIsOpen?: boolean;
  hideLeftPanelOnDesktop?: boolean;
};

export const MainLayout = ({
  icon,
  children,
  hideLeftPanelOnDesktop = false,
  leftPanelContent,
  rightPanelContent,
  rightHeaderContent,

  languages,
  enableResize = false,
  rightPanelIsOpen = false,
}: PropsWithChildren<MainLayoutProps>) => {
  const [isLeftPanelOpen, setIsLeftPanelOpen] = useState(false);
  const { isDesktop } = useResponsive();
  const ref = useRef<ImperativePanelHandle>(null);

  const [minPanelSize, setMinPanelSize] = useState(
    calculateDefaultSize(300, isDesktop)
  );
  const [maxPanelSize, setMaxPanelSize] = useState(
    calculateDefaultSize(450, isDesktop)
  );

  const onTogglePanel = () => {
    setIsLeftPanelOpen(!isLeftPanelOpen);
  };

  useEffect(() => {
    const updatePanelSize = () => {
      const min = Math.round(calculateDefaultSize(300, isDesktop));
      const max = Math.round(
        Math.min(calculateDefaultSize(450, isDesktop), 40)
      );
      setMinPanelSize(isDesktop ? min : 0);
      if (enableResize) {
        setMaxPanelSize(max);
      } else {
        setMaxPanelSize(min);
      }
    };

    updatePanelSize();
    window.addEventListener("resize", () => {
      updatePanelSize();
    });

    return () => {
      window.removeEventListener("resize", updatePanelSize);
    };
  }, [isDesktop, enableResize]);

  // We need to have two different states for the left panel, we want to always keep the
  // left panel mounted on mobile in order to show the animation when it opens or closes, instead
  // of abruptly disappearing when closing the panel.
  // On desktop, we want to hide the left panel when the prop is set to true, so we need to
  // completely unmount it as it will never be visible.
  const mountLeftPanel = isDesktop ? !hideLeftPanelOnDesktop : true;
  const showLeftPanel = isDesktop ? !hideLeftPanelOnDesktop : isLeftPanelOpen;

  return (
    <div className="c__main-layout">
      <div className="c__main-layout__header">
        <Header
          onTogglePanel={onTogglePanel}
          isPanelOpen={isLeftPanelOpen}
          rightIcon={rightHeaderContent}
          leftIcon={icon}
          languages={languages}
        />
      </div>
      <div className="c__main-layout__content">
        <PanelGroup autoSaveId={"persistance"} direction="horizontal">
          {mountLeftPanel && (
            <>
              <Panel
                ref={ref}
                order={0}
                defaultSize={minPanelSize}
                minSize={minPanelSize}
                maxSize={maxPanelSize}
              >
                <LeftPanel isOpen={showLeftPanel}>{leftPanelContent}</LeftPanel>
              </Panel>
              {isDesktop && (
                <PanelResizeHandle
                  className="bg-greyscale-200"
                  style={{
                    width: "1px",
                  }}
                />
              )}
            </>
          )}
          <Panel order={1}>
            <div className="c__main-layout__content__center">
              <div className="c__main-layout__content__center__children">
                {children}
              </div>

              <RightPanel isOpen={rightPanelIsOpen}>
                {rightPanelContent}
              </RightPanel>
            </div>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  );
};

const calculateDefaultSize = (targetWidth: number, isDesktop: boolean) => {
  if (!isDesktop) {
    return 0;
  }

  const windowWidth = window.innerWidth;

  return (targetWidth / windowWidth) * 100;
};
