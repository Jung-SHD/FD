import Input from "@/components/atoms/input";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import CardComp, {
  FileCard as FileComp,
  ImageLinkCard as ImageLinkComp,
  ContentCard as ContentComp,
} from "../components/organisms/card";
import { CardType } from "@/components/organisms/card/card.d";
import CardImg from "./assets/card-image.png";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Card",
  component: CardComp,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    title: {
      controls: "string",
      default: "",
    },
    subTitle: {
      controls: "string",
      default: "",
    },
    chipLabel: {
      controls: "string",
      default: "",
    },
    useMenu: {
      controls: "boolean",
      default: false,
    },
    usePinIcon: {
      controls: "boolean",
      default: false,
    },
    useNewWindowIcon: {
      controls: "boolean",
      default: false,
    },
    useShareIcon: {
      controls: "boolean",
      default: false,
    },
    subTitleClass: {
      controls: "string",
      default: "",
    },
    createDate: {
      controls: "date",
    },
    backgroundColor: {
      controls: "select",
      options: ["white", "primary-light", "primary-dark"],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    chipLabel: "label",
    title: "Default Card",
    subTitle: "Default Card Subtitle",
    summary: "Test card summary",
    usePinIcon: true,
    useNewWindowIcon: true,
  },
} satisfies Meta<typeof CardComp>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Card: Story = {
  args: {
    chipLabel: "label",
    title: "Default Card",
    subTitle: "Default Card Subtitle",
    usePinIcon: true,
    useNewWindowIcon: true,
    isPinned: false, 
    id: "example-id",  
    isStackedLocation: false,  
    handlePinIconClick: async (id) => console.log(`Pinned: ${id}`)
  },
};

export const DefaultCard: Story = {
  args: {
    chipLabel: "label",
    title: "Default Card",
    subTitle: "Default Card Subtitle",
    summary: "Test card summary",
    usePinIcon: true,
    useNewWindowIcon: true,
    isPinned: false, 
    id: "example-id",  
    isStackedLocation: false,  
    handlePinIconClick: async (id) => console.log(`Pinned: ${id}`)
  },
};

export const FileCard: Story = {
  args: {
    chipLabel: "label",
    title: "Default Card",
    subTitle: "Default Card Subtitle",
    className: "bg-primary-50 h-[200px]",
    usePinIcon: false,
    useNewWindowIcon: false,
    isPinned: false, 
    id: "example-id",  
    isStackedLocation: false,  
    handlePinIconClick: async (id) => console.log(`Pinned: ${id}`)
  },
  render: (args) => {
    return (
      <>
        <FileComp isBookmarked={false} toggleBookmark={function (id: string): void {
          throw new Error("Function not implemented.");
        } } {...args} />
      </>
    );
  },
};

// export const ImageLinkCard: Story = {
//   args: {
//     link: "/",
//     backgroundImg: CardImg.src,
//     className: "w-[300px] h-[350px]",
//   },
//   render: (args) => {
//     return (
//       <>
//         <ImageLinkComp link={""} backgroundImg={""} {...args} />
//       </>
//     );
//   },
// };

export const ContentCard: Story = {
  args: {
    title: "Content Card",
    className: "w-[500px] h-[350px]",
    isPinned: false, 
    id: "example-id",  
    isStackedLocation: false,  
    handlePinIconClick: async (id) => console.log(`Pinned: ${id}`)
  },
  render: (args) => {
    return (
      <>
        <ContentComp {...args} />
      </>
    );
  },
};