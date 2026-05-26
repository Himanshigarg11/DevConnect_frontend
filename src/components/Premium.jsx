import React from "react";
import { Crown, Check, Zap } from "lucide-react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
const Premium = () => {
  const [isUserPremium, setIsUserPremium]=useState(false)
   const verifyPremiumUser=async ()=>{
   try{
const res=await axios.get(BASE_URL+"/premium/verify",{withCredentials:true})
if(res.data.isPremium){
      setIsUserPremium(true)
}
   }
   catch(err){
     console.log(err);
   }
   }

   useEffect(()=>{
         verifyPremiumUser()
 },[])

  const plans = [
    {
      name: "Dev Silver",
      price: "₹99",
      color: "from-slate-500 to-gray-700",
      button: "Start Silver",
      icon: <Zap size={32} />,
      features: [
        "Unlimited Chat with Connections",
        "See Who Sent You Requests",
        "10 Priority Swipes Daily",
        "Basic Profile Boost",
      ],
    },
    {
      name: "Dev Gold",
      price: "₹299",
      color: "from-yellow-400 to-orange-500",
      button: "Go Gold ✨",
      popular: true,
      icon: <Crown size={34} />,
      features: [
        "Everything in Silver",
        "Profile Appears on Top",
        "Unlimited Priority Swipes",
        "Exclusive Gold Badge",
        "Early Access to New Features",
      ],
    },
  ];

  const handlePayment = async (plan) => {
   try{
     const order=await axios.post(BASE_URL+"/payment/create",
      {membershipType:plan},
      {withCredentials:true}
    )

      // after getting order it should open the dialog box
    const {amount,keyId,currency,notes,orderId,status} =order.data
    const options = {
    "key": keyId, 
    "amount": amount,  
    "currency": currency,
    "name": "Dev Connect", 
    "description": "connect to other developers",
    "order_id": orderId, 
    "prefill": { 
        "name": notes.firstName + " " + notes.lastName, 
        "email": notes.emailId,
        "membershipType":notes.membershipType,
    },
    "theme": {
        "color": "#3399cc"
    },
    "handler":verifyPremiumUser
};
 console.log(order);
      const rzp=new window.Razorpay(options);
      rzp.open();
   }
   catch(err){
           console.log(err);
   }
  };

  return isUserPremium?("you are already a premium user"):(
   <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-gray-900 text-white py-16 px-6">

      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Unlock Premium Features 🚀
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          Get better visibility, premium matching, and powerful features
          to grow your developer network faster.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-3xl p-8 border border-gray-700
            bg-gradient-to-b from-gray-900 to-black
            transition-all duration-300 hover:scale-105
            shadow-2xl overflow-hidden
            ${plan.popular ? "shadow-yellow-500/30 animate-pulse" : ""}
            `}
          >

            {/* Popular Badge */}
            {plan.popular && (
              <div className="absolute top-5 right-5 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                Most Popular
              </div>
            )}

            {/* Icon */}
            <div
              className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${plan.color}
              flex items-center justify-center mb-6 shadow-lg`}
            >
              {plan.icon}
            </div>

            {/* Plan Name */}
            <h2 className="text-4xl font-bold mb-3">
              {plan.name}
            </h2>

            {/* Price */}
            <div className="mb-8">
              <span className="text-6xl font-extrabold">
                {plan.price}
              </span>

              <span className="text-gray-400 text-lg">
                {" "} / month
              </span>
            </div>

            {/* Features */}
            <div className="space-y-5 mb-10">
              {plan.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4"
                >
                  <div className="bg-green-500/20 p-1 rounded-full">
                    <Check
                      className="text-green-400"
                      size={18}
                    />
                  </div>

                  <span className="text-lg text-gray-200">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Button */}
            <button
              onClick={() => handlePayment(plan.name)}
              className={`w-full py-4 rounded-2xl font-bold text-lg
              bg-gradient-to-r ${plan.color}
              hover:opacity-90 transition-all duration-300
              shadow-lg`}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Premium;