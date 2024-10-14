import { Input } from "@/components/ui/input";
import ShineBorder from "@/components/ui/shine-border";
import { RainbowButton } from "../ui/rainbow-button";








const SearchBox : React.FC = () => {

    return(

        <>

        <div className="flex justify-center mt-20 flex-col items-center">
        <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]} borderWidth={6}
        >
            <Input type="text" placeholder="Enter Link 🔗"/>
           
        </ShineBorder>
        <RainbowButton className="w-10 ">Submit</RainbowButton>
        

        </div>

        

        

        </>
      
      

        
    )

}

export default SearchBox;