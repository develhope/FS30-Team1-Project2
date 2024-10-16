import ShineBorder from '@/components/ui/shine-border';

import { useState } from 'react';
import GeneralButton from '@/shared/components/generalButton/GeneralButton';

const SearchBox: React.FC = () => {
  const [search, setSearch] = useState('');
  return (
    <>
      <div className="flex justify-center mt-20 w-full max-w-full md:max-w-xl lg:max-w-2xl mx-auto px-4">
        <ShineBorder
          className="flex p-0 w-full"
          color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
          borderWidth={2}
        >
          <input
            className="z-10 flex-1 px-4 py-2 text-lg outline-none bg-transparent"
            type="text"
            placeholder="Enter a thread/playlist/video Link 🔗"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <GeneralButton className="text-lg px-4 py-2 mr-2">
            Submit
          </GeneralButton>
        </ShineBorder>
      </div>
    </>
  );
};

export default SearchBox;
