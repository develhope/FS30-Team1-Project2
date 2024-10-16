import { Input } from "@/components/ui/input";
import ShineBorder from "@/components/ui/shine-border";
import { RainbowButton } from "../ui/rainbow-button";
import { useState } from "react";








const SearchBox : React.FC = () => {
    const [search, setSearch] = useState('');
    return(

        <>

        <div className="flex justify-center mt-20 flex-col items-center">
        <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]} borderWidth={6}
        >
            {/* <Input type="text" placeholder="Enter Link 🔗"/> */}
          <input className="z-10" type="text" placeholder="Enter Link 🔗" value={search} onChange={(event)=> setSearch(event.target.value)}/>
        </ShineBorder>
        <RainbowButton className="w-10 ">Submit</RainbowButton>
        

        </div>

        

        

        </>
      
      

        
    )

}

export default SearchBox;