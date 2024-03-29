import { socialMediaMap } from './list/SocialMediaMap';
import { portfolioMap } from './list/PortfolioMap';
import { aboutMap } from './list/AboutMap';
import ListComponent from './listComponent/ListComponent';
import { ListComponentInternal } from './listComponent/ListComponent';

export default function RedirectList() {
  return (
    <div>
      <ListComponent redirectListMap={portfolioMap} />
      <ListComponent redirectListMap={socialMediaMap} />
      <ListComponentInternal redirectListMap={aboutMap} />
    </div>
  );
}
