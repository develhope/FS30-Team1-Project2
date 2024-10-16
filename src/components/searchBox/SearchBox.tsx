import ShineBorder from '@/components/ui/shine-border';

import { useState } from 'react';
import GeneralButton from '@/shared/components/generalButton/GeneralButton';

const SearchBox: React.FC = () => {
  const [search, setSearch] = useState('');
  return (
    <>
      <div className="flex justify-center mt-20 flex-col items-center">
        <ShineBorder
          className="flex p-0 w-2/3"
          color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
          borderWidth={2}
        >
          <input
            className="z-10"
            type="text"
            placeholder="Enter Link 🔗"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <GeneralButton>Submit</GeneralButton>
        </ShineBorder>
      </div>
    </>
  );
};

export default SearchBox;
