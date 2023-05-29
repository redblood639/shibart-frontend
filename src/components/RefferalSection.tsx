const RefferalSection = () => {
  return (
    <div
      className="px-6 py-10 mt-16 bg-white lg:py-32 lg:px-20"
      id="referral-part"
    >
      <p className="text-[#3C2C2D] text-[48px] leading-[48px] font-extrabold">
        <span className="text-[#F29B4C]">$ART</span> 50 billion token airdrop
      </p>
      <p className="mt-5 text-[24px] font-bold text-[#686A6C] tracking-[-0.02em] leading-[32px]">
        Help us reach our presale target and receive a huge $ART airdrop! The
        reward will be based on your cumulative referral amount. Follow these
        steps to join:
      </p>
      <div className="flex md:flex-row flex-col justify-between p-0 2xl:gap-[32px] xl:gap-[16px] lg:gap-[12px]">
        <div className="flex flex-row py-20 2xl:px-20 md:px-10 px-3 gap-[64px] hover:shadow-custom">
          <div className="flex flex-col justify-center gap-[108px]">
            <div className="flex flex-col gap-[24px]">
              <div className="flex justify-center rounded items-center gap-[10px] w-[60px] h-[50px] bg-[#8C7662]">
                <p className="font-extrabold 2xl:text-[32px] xl:text-[24px] lg:text-[16px] text-center leading-[32px] tracking-[-0.02em] text-[white]">
                  1
                </p>
              </div>
              <p className="mt-6 2xl:text-[32px] xl:text-[24px] md:text-[16px] text-[32px] text-[#202025] font-extrabold">
                Purchase $ART in presale
              </p>
              <p className="md:w-full w-2/3 md:mt-0 mt-12 text-[#686A6C] font-medium text-[20px] xl:text-[20px] md:text-[16px] leading-[32px] tracking-[-0.02em]">
                Learn how to create and collect artwork
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row py-20 2xl:px-20 xl:px-10 gap-[64px] hover:shadow-custom">
          <div className="flex flex-col justify-center gap-[108px]">
            <div className="flex flex-col gap-[24px]">
              <div className="flex justify-center rounded items-center gap-[10px] w-[60px] h-[50px] bg-[#8C7662]">
                <p className="font-extrabold 2xl:text-[32px] xl:text-[24px] lg:text-[16px] text-center leading-[32px] tracking-[-0.02em] text-[white]">
                  2
                </p>
              </div>
              <p className="mt-6 2xl:text-[32px] xl:text-[24px] md:text-[16px] text-[32px] text-[#202025] font-extrabold">
                Share your referral code
              </p>
              <p className="md:w-full w-2/3 md:mt-0 mt-12 text-[#686A6C] font-medium xl:text-[20px] text-[16px] leading-[32px] tracking-[-0.02em]">
                Learn how to create and collect artwork
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row py-20 2xl:px-20 xl:px-10 gap-[64px] hover:shadow-custom">
          <div className="flex flex-col justify-center gap-[108px]">
            <div className="flex flex-col gap-[24px]">
              <div className="flex justify-center rounded items-center gap-[10px] w-[60px] h-[50px] bg-[#8C7662]">
                <p className="font-extrabold 2xl:text-[32px] xl:text-[24px] lg:text-[16px] text-center leading-[32px] tracking-[-0.02em] text-[white]">
                  3
                </p>
              </div>
              <p className="mt-6 2xl:text-[32px] xl:text-[24px] md:text-[16px] text-[32px] text-[#202025] font-extrabold">
                Start earning $ART airdrop
              </p>
              <p className="md:w-full w-2/3 md:mt-0 mt-12 text-[#686A6C] font-medium xl:text-[20px] text-[16px] leading-[32px] tracking-[-0.02em]">
                Learn how to create and collect artwork
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-16">
        <button className="bg-[#3C2C2D] rounded px-[36px] py-[18px] text-[12px] tracking-[0.17em] font-extrabold text-white">
          BUY $ART NOW
        </button>
      </div>
    </div>
  )
}
export default RefferalSection
