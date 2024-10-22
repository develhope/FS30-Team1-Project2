import "./WhyChooseUsParent.css";
type WhyChooseUsParentProps = {
    children: React.ReactNode;
  }; //sto dichiarando il tipo
  

const WhyChooseUsParent: React.FC<WhyChooseUsParentProps> = ({children}) => {

    return(
        <section>
            
            <h1>Why Choose Us?</h1>
            {children}
            </section>
        
    )
}

export default WhyChooseUsParent;