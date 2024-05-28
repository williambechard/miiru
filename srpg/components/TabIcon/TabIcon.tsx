import React, { useMemo } from 'react';
import MapIcon from '../../assets/icons/map.svg';
import BackpackIcon from '../../assets/icons/backpack.svg';
import JournalIcon from '../../assets/icons/journal.svg';
import PlayerIcon from '../../assets/icons/player.svg';



const rect = {width:40, height: 40};

const allIcons = {
    map: () => <MapIcon width={rect.width} height={rect.height} style={{paddingTop:2, paddingBottom:2}}/>,
    backpack: ()=> <BackpackIcon width={rect.width} height={rect.height} style={{paddingTop:2, paddingBottom:2}} />,
    journal: () => <JournalIcon width={rect.width} height={rect.height} style={{paddingTop:2, paddingBottom:2}} />,
    player: () => <PlayerIcon width={rect.width} height={rect.height} style={{paddingTop:2, paddingBottom:2}}/>,
};

type IconName = keyof typeof allIcons;

interface TabIconProps {
    name: IconName;
    focused?: boolean;
}

export const TabIcon: React.FC<TabIconProps> = ({ name, focused }) => {
    const Icon = useMemo(() => {
        return allIcons[name] ?? null;
    }, [name]);

    return <Icon />
};
