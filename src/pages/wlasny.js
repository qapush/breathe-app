import Page from '../components/Page/Page';
import CustomMode from '../components/customMode/customMode';

export default function Wlasny({updateCustomMode}) {
    return (
        <Page>
            <CustomMode updateCustomMode={updateCustomMode}/>
        </Page>
    )
}