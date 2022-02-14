import { Skills } from '../components/per-page';
interface PropType {
    viewWidth: number;
}
export default function SkillsPage({viewWidth}: PropType) {
    return (<>
    <Skills viewWidth={viewWidth}/>
    </>)
}
