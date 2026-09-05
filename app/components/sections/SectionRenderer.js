import HeroSectionBlock from "./HeroSectionBlock";
import RichTextBlock from "./RichTextBlock";
import ImageTextBlock from "./ImageTextBlock";
import CtaBlock from "./CtaBlock";
import StatsBlock from "./StatsBlock";
import ProcessBlock from "./ProcessBlock";
import FeatureGridBlock from "./FeatureGridBlock";
import FaqBlock from "./FaqBlock";
import CardsBlock from "./CardsBlock";
import EmbedBlock from "./EmbedBlock";

/* Fixed whitelist of CMS section `type` → React component. This is the only
   place a section type string ever selects a component — it is never used
   to build a dynamic import path or otherwise execute anything from CMS
   data. An unrecognized type (e.g. a section type added in the admin after
   this list was last updated) renders nothing rather than throwing, so one
   unknown block can't take down an entire page. */
const BLOCKS = {
  hero: HeroSectionBlock,
  rich_text: RichTextBlock,
  image_text: ImageTextBlock,
  cta: CtaBlock,
  stats: StatsBlock,
  process: ProcessBlock,
  feature_grid: FeatureGridBlock,
  faq: FaqBlock,
  cards: CardsBlock,
  embed: EmbedBlock,
};

export default function SectionRenderer({ sections = [] }) {
  return (
    <>
      {sections.map((section) => {
        const Block = BLOCKS[section.type];
        if (!Block) return null;
        return <Block key={section.id} data={section.data} />;
      })}
    </>
  );
}
