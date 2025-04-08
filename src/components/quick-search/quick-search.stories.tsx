/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react";

import { QuickSearch } from "./QuickSearch";
import { QuickSearchGroup } from "./QuickSearchGroup";
import { Button, Modal, ModalSize } from "@openfun/cunningham-react";
import { useState } from "react";
import { QuickSearchData } from "./types";
import { QuickSearchItemTemplate } from "./QuickSearchItemTemplate";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/QuickSearch",
  component: QuickSearch,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
} satisfies Meta<typeof QuickSearch>;

type Data = {
  id: string;
  name: string;
  description: string;
};

export default meta;
type Story = StoryObj<typeof meta>;
const initialGroup: QuickSearchData<Data> = {
  groupName: "Group 1",
  showWhenEmpty: true,
  emptyString: "No results found",
  elements: [],
};
export const Small: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<Data | null>(null);

    const [group, setGroup] = useState(initialGroup);
    const onFilter = (filter: string) => {
      if (filter.length === 0) {
        setGroup(initialGroup);
      } else {
        setGroup({
          ...group,
          elements: group.elements.filter((element) =>
            element.name.includes(filter)
          ),
        });
      }
    };
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open</Button>
        {selected && (
          <div>
            <span>Selected: {selected.name}</span>
          </div>
        )}

        <Modal
          isOpen={open}
          onClose={() => setOpen(false)}
          size={ModalSize.LARGE}
        >
          <QuickSearch placeholder="Search" loading={false} onFilter={onFilter}>
            <QuickSearchGroup
              group={group}
              onSelect={(element) => {
                setSelected(element);
                setOpen(false);
              }}
              renderElement={(element) => (
                <QuickSearchItemTemplate
                  left={<span>{element.name}</span>}
                  right={<span className="material-icons">add</span>}
                />
              )}
            />
          </QuickSearch>
        </Modal>
      </div>
    );
  },
};
