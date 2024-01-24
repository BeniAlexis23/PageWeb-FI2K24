import Banner from "../shared/Banner"
import newImg from "../assets/newImg.jpg"

const Newsletter = () => {
    return (
        <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12">
            {/*use our banner component and pass props */}
            <Banner banner={newImg} heading={"A nombre de la Nación"} subheading={"asd sd  dsds sf sfsafs ds  sds sfadfaefegeg g fefe d df dfdf df df defef dsdsdsds"}/>
        </div>
    )
}

export default Newsletter
