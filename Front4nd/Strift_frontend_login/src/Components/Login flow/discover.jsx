import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Store from "./store";

function Discover() {
  const navigate = useNavigate();

  //For seaching
  const [searching, setSearching] = useState(false);

  const handleSearchClick = () => {
    setSearching(true);
  };

  const handleSearchClose = () => {
    setSearching(false);
  };

  //For selecting stores

  const [selectedStores, setSelectedStores] = useState([]);

  const storesData = [
    {
      id: "jaywalkin",
      name: "Jaywalking IN",
      logo: "https://s3-alpha-sig.figma.com/img/450b/c2d4/f478d1a9be4b92915c8546c1b3c28870?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=If8lmt3fZIMEA36xFdna2RzIaPd9XEqJwJ049lAtv-t8AVnPSJHINnvgwt~FrTTV5YMxMYkZ4pp0FkkhPT4qurcOqNwCAXkqTaSVMu4UIQf1PljP4GjQeIXGDLl~3WHnvibqzInxo--0fY7UEniALJZAiLTYCPVv7rY~Cylq2dGmkfAxJtC8rdU9pmu6C4Mpua3h6gUlMB-qWTRw9ejNKCNHUBF2ib-PcvcBQSc-uCcX57Zz56j~XzV9clDzdccqZZRvMSRz8QBdkfIo3KGM1One52kMyA-miw1Et2mGMMK1noH1VeE-vmAqUlPEjqvshWfkfzB60XweAUdUVRfBJQ__",
      rating: 4.9,
      category: "Streetwear",
      images: [
        "https://s3-alpha-sig.figma.com/img/4e3b/e898/c725b1eaf19e0f9d408d4fd1e3e3b5bd?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YuU5Ui7Iu6KbfuGBMNthovVjXstRNedI0rsHEGA36ZCr~~kxJNivJYYyAZTOYonYh2wBDquH6qS-9HdwTkqN5iUAY0AHIhEfhd47xXpP5RrETEOuW2sLL2NS3dYHy9V~Y2ZO-AeP4q4DCVPgsbjD07KE1cP4Pz229X7Wiw9NTGuo2MpzKFx1WtYYfF1guJrmr9xgp6zWasfu~zUfVHYyS2ZBarTnnxOugCxrjlYsWTBdmJe1EzbrkhEGcFlvcFuv--ugn5NL2fTnFDflKX~YYKyXoOS12mrRahbP1sq6Wp09NOn5vR7N7O6EGoPK9H9TUNh5HvRN34SYOcXUkRncaA__",
        "https://s3-alpha-sig.figma.com/img/a8cb/1fc6/b73cf606f64f91304e26ac786d15dcbd?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=grr8vIoHDM8Pwl7DCWNbLvlbxxuSQ5NpxME89KjaFbCXgZ3xdHOyal0DrMDyF3W~~mi~cbM1iIlUvjT2XRjuxzOe1GU-lX6f1ryTbe2tuK9iAqIot9yHTuBsKbeS9nJUUbFBcVLzk9KU-i9RfTlXerVLu52lLq914hg-tpLzmDsSqZuFRpJS3IEfJRR1HhjycUmmwU4Y0S~nWyMfsrqjQSESZ0GN5OV9XTRez0bFFL10DZVhbeOASqgnYB6T6PTrZIz9OzPLacLb90IfbPsbVCtepoFoQ70csh~PD5eZlDEoCtO0AxwdF~ygAnhjzd4SgsIBZgzQMaju0LIvtrgLsg__",
        "https://s3-alpha-sig.figma.com/img/be80/be9a/3712916c75ac48725b3665c1fbadd55c?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T1F7Wg0XEAbKQ9P944Bf0nwOCqKfKhgBQOm5SNmL5eX-WopOQlfMwY7HmVVUnoEjqb6dDqHhCR0-3syb0jKPgJYUaF~DVopAzLG50afOM-1b4qVLNT-1kHH223xtm2Gk1vyNRACbB64ekWd6JHCTgXnFpPcRbFzRmWIh9AWeycwVsiZwdY~wn8pdXKaQRPr7MqCS0HW9cB~omMyLnflfxAR1~zboYTo4YTLWNfX0jUHFiSn~PCRNeMldLNK8CiM1jtpjVSJJ1EIfXg8G4jhik9IubGhHHGL~vdgXy~YMhvw74fY7qRN8lZZkN4Q~xE96kLJn3xOpq3r6flx9Sz6BrQ__",
        "https://s3-alpha-sig.figma.com/img/0e47/d446/a53500477b3888ac65d591230ce8d003?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FG7-nIRgjuXHVXFOtEAK-hu6UyiZzAlim6CwKsbHb-NUwOlnQTr5IGjOazoLvNUxihHEy3DnzabonqzYRJcVXHQkD73EWKBosANj1IQMm8YzQOxXFQca105Ot-YBylYjAmsQ8RXA1W4RktY333kk2vKSk7wjJRhGDQO0c116m6mcALloFmZKKdgZDiGQegusj0RUS978kq-w7S1X-~7TfW82H4Sm7groKGFYtuZDIXq0CCmmI2bwF9L~BFwd8iwc77YSsHdCDReUx228vWpq0XMepvVhUtLreL3EmyYwolao8Mi7GAfUQqYviEwLd0m4nKqOe4fw4lSRH2O2fzdVJw__",
        "https://s3-alpha-sig.figma.com/img/3b20/ed3b/3fdfa71440ea480ee34f1afb2b5392b4?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F8Tw6vhinTWfGhgcwgeNr-rPLcwuGxsNe7DNd1r6~KiVq5S7MLo67XhA1L4R4eFThnYSHWR0rlMuiyht4RQ9LmnLqJy03GCHAoGs4f-e2FsHYpbK37EdOgxRtzxjcWVcVRwSEM8ffZguEp4NY9r2m2NQhT7GFoqg7WgEmMnM0dNyTcvOZsOca9-izrm6~qudPjZ3mMEeRSNwWgLgSMBq1VJcDgWkufcjWZrXlVe-CfxuRlE5PmcZfEwSdb7gc274KqpJoft6yHEul7JM9EDM193Ioetn2YQKYOdn9wmYEPGYjmwHZZh-iLSHEcschZEoWnDR42KwehyBkklnW8eJHA__",
      ],
    },
    {
      id: "bluorng",
      name: "bluorng",
      logo: "https://s3-alpha-sig.figma.com/img/598c/7c08/8ec3f72518cde380da18f2f3edf11d7e?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cw8ZLiPkz5Rso6WuAXwmSoHAek3mZmeux7CCScXggffUlEg8tEPmX-gMBDLw~Pd0Q182EfoPLg7VLgw0Na0ieslHV8WrUPL5b1B3LpLqeDrz3Xc~szrLhf8ld7JeD0NxI7cCI29Q2J9SrE8ScdquXkABvu0US1UkSAw87KBVrXvC~2LjvBjcX-M8MZxwcp0kMTcHfUdtSKUr0WZ6HJHWVzb~PnnoUraalpPBdAaQZuEDoYvQZJC8n90X~qBk~flm-3a6QVw8Xd7XY7RdHfjajNheZM4Cc9B6rqXzBG6nvB6jGcVCl1WWAdgiMJ7q5iNeNsDGyEcAZPzrdglZrSyC2A__",
      rating: 4.4,
      category: "High Fashion",
      images: [
        "https://s3-alpha-sig.figma.com/img/2df1/0324/a50e397dbe4d48ac80251b22f6258c71?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YOjE8W4druQ6oEgDoVYolwZypEXs5BwME2TV3AG0ccCrJoOazVWximVKCo0wVcJe6pg3eQ-~BVIoTZiuAGdtZqVzODePOPujnnwpMoU19vwOwhxlazx~n1106cGf9LFCYo-KWiWSty6XyZz9fayCPPwitlWOHy5wjndpO59uBU~fu1CD4iPlvZuWUmDddQalVJSJM9xgZsBuHd3ko0qF-7sr9~BiGJFNhxFLkAVeNvWTEJWh66BWwZUA2oaBv7WIOmUNZOMDMItBdcbhV0wMop6qMbqgqpvW6hz2vQxSIEUEsK0~WX1jUMXEFpHdH8F9zz448fVzNBv9XA3wyACxPg__",
        "https://s3-alpha-sig.figma.com/img/fa4e/52bc/2b243c0d852b3ea94e355cb7ded8fdc6?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IzKPidP-xXAzP~S~IAs95Q~I4vvj379bRbiz1u4keECHs-lrsX1y6W9Tpx6VdRT2e-EjZ~KaNppebo6K2WDlt70UYEIF0jZ0AECP8FA2awDtvV6cuhxxxTjII6dK0PP2~syAFcn4lHH5YBQhuzVR284iFPkVKxMXPIVZvbeP9vR6U~6PihVkIEV3ziyv1j05V1B~AgZoQ09KFYR19nh7JferwNoT4v4IlQ7wriBkH8dN-6Y0Jx1oo28Oi4O9CnZG9TgVdx0arATIcZ6J7SU7ndW7i8WUlxK1uWflr~AHD608qkMMNhdebULBWrc9B~uyetitUnE4-G47z07s6UcBJQ__",
        "https://s3-alpha-sig.figma.com/img/45d2/4f20/3c2a888d07911769a19b84e1d4364ecf?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MeA4NqzjLBso7q6U0SGEoN~wHiVZqSQQIXfkr04xqMxZqSzVjoFwqLhQZR-AvrCsFo4eRkskiSJzBP2u41IH3iHtiRLk7ItlU-MhRI9fCvK-3~OYVYyQIbuhbMRYXqT13av1aO53snaIsXMVS6XY6BqDxPZihRPSq1Kwv~6ivJVh3cKIdSS-ufakG~j9YO1mnGCJnRTbXVeLBoE~3OKpDJ8nVWS22midniF0E0DwsfaxCByVJgKjZfhDYWaKRlMXKxvNZ78YpktN2c7TwucsBDq3z~NKxtQuVPSEBitEXePnt3CCY-Alb-Ss9sQIfJhVp6DAcjObMXnfHY9k5VX~hA__",
        "https://s3-alpha-sig.figma.com/img/0684/3042/313fd006504aeb5bfcee03821d647825?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TUdCBg5ru7vontTGfuhk6uK01yiVlJXW03~bXeIMMfLZs-AkQj3Q~jpldHPjj9HK9yyJXhoKM2F09y0lCkbFigt0cUFyC8M8W4G2OSVBQFvXbEGjm3As6xJAj0yiw1hqRXg00eI5jiSh1XGiMJiMlJMUm7UmB8B7~-N~hzIH1B7sKeKpflbq8dXjN2Wg8lz7XhjIJmasY2UiOtN4Yds6qHCsHH8Txu8a~-HNLnZJhnee~EWfJySwaXXeriLqIGxTuk3cnt-iv2WA2zsyb1WZTuIXmjhENsaDl3aVtiDR2A-haL71bm2w2uKEVaiJkZJV22zW7a55jBmFDr-PQ55KsQ__",
        "https://s3-alpha-sig.figma.com/img/234e/e213/cbf89debf1121ed0ffdba30cd01d7e15?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g2gUGZtPRV1XTwv0YO7~UTRxmJqTXBF-yqzCPS9cn~x41juYJ4fCTL17OfwYL0vW~YN3tq2GXGyZBO4J1LSOgOSJltdgz3QApHoa1Zj35BaoJfs4gcWYXxId4on5eRmcmMRzU0FAG-LuLZyYWQBWjwYDYJEnFsvsUmNt7Q35~t8I9bymxenxL8BiFiRIFquJOHbZlHiwObVTWeelyd~eqGiDxlTbrRh0gsOm1pv2bBtuhfuPFnAVYwSkGcFzE2esTztjZJSXqDgjEhbyqSvyuwcPXiaGvFhdwKL7MxLPNvKhrI7ZMo5dwql33yoLscz18voGBAmLOQgKM2n0cmFNbQ__",
      ],
    },
    {
      id: "Evergreen Thrift",
      name: "Evergreen Thrift",
      logo: "https://s3-alpha-sig.figma.com/img/bf9b/a1bd/ddaf630addf6534c91920a022b5a761c?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E6MxElM76UyJXtm8Pbvo03O7s2Op7apgzs~NUdo2c7fXhiyijmiv5ZH0weq1IAR2CcCFF-qoZXKGCu6sBuhOJFtUbz9fDVP5oansyADnRnguampAwmcBupECtcQoreZMyFCVInJ1KMZSM-wzPYr2e2J6IQyA2h0xzbbA-oXucWBFDAypGiA0fZuu~gX7LvEJLBPtDAEAGJL6jahZSjDs5FoA~Xw~oY-0nFGE8t1Ao3FuJWotl08fHKtN~ehjpZyFP2C9Ah7BCz~GCvHugpKVHDUBqrNSRvQpxMiO6OQ1IIs0ig6AxCsW-2cQr0jVo93p1qwln981BE-1BJNb9etC2A__",
      rating: 4.6,
      category: "Thrift Store",
      images: [
        "https://s3-alpha-sig.figma.com/img/ca68/cdae/a36eba971a065f01f0b1ce112ccb3df6?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TarAnT0lJvhuwrXUegxge3lTjnB8rMbc07H5EreNNkYHA2Vjv7NIDjruOclcV4qP4AAQH7bXqw0uhWi2ixdpuNLazpSRtlQ2SOWpo0FsQu~QAB-TfnTSPKe6lutyfFfIKgPZEPArADRKA358xHQe4JbHcuq4OjqPTXnQdh1AodGF9ULi~JBwa8oPBaxjrHvkNr4HNxGH2Io9uyTCuRtvs11yMfxnO6q0cedDwwvUSbzIEQTnGCb61rL2ZOM3x3oxCjDjpLT7U5qhjMTFjLTycLOVpo1CoQYf39SWwXL8phelLwMToyM7isHgJcKMLAu3He~WuoOnmSCpzQMjyrk~iw__",
        "https://s3-alpha-sig.figma.com/img/8bd6/9bb6/da4b3fc94fbd91478db26049a78f0cbb?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DBXArK4rv9sG8Xc99BQSZtoyQ7JsCeniY03VM8ExSYrmnjmLK0LcJqQYYpPNhkI9MPMp7m9IDKvQ-Lb3sTsHx1upHa8TUpyQhvJQ58IaUF3xA4jHF88i28fph~0oteTU9wOmGXb9I56GyjhQC7zE7FOMJi9b53B-srhtbDHuNoEScRVIbJCsq9zcufN8-m0D3~nzaO4JrcUXv9McI4pd0IcxGy1kATZp2nsO1X~MTo4JVrfcIzR-yrg8zIvwPoBkvKR0Yt6fJVzx13qCgRD5a72XS54IbsW-NZTJKAHqTfyJD0ibWKq7drVdOJxqs4gCwqVkLNrRIdiwn-7eERNHEw__",
        "https://s3-alpha-sig.figma.com/img/e528/1f12/6d8aaa769167886a86789e1c670aa1f9?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VBSTNijAtOhOhbEtfRQcaMwz6zN~1bpB2ECJnv2Zq1oUlYaAAlyKJJRMO59ZOvfujVEXkpMS8vvaL7geNgbUMscN5JUBvqxWwtwO9IQffavzHsCOxTmBpBRv9EzrII2qm~Bopn4f50H3ig85HE2GoV7GyCduZdGqZ3t16oDmz2mPDh0zqAUsQDPpBqbwZoRzrc0r4Ie0BG2lvuenBrGyC9icaMP672BfEB~JCDyljmkmfvq~H739JlbG~5Lbt1e2FZdyhscTE3k6G61hl~h91VIwhIND~ebNvK4UUxNJZoI0VQE-QAjLugXpfOITbNnJ6i77y7ByZhoZ6npNYFX8jw__",
        "https://s3-alpha-sig.figma.com/img/e528/1f12/6d8aaa769167886a86789e1c670aa1f9?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VBSTNijAtOhOhbEtfRQcaMwz6zN~1bpB2ECJnv2Zq1oUlYaAAlyKJJRMO59ZOvfujVEXkpMS8vvaL7geNgbUMscN5JUBvqxWwtwO9IQffavzHsCOxTmBpBRv9EzrII2qm~Bopn4f50H3ig85HE2GoV7GyCduZdGqZ3t16oDmz2mPDh0zqAUsQDPpBqbwZoRzrc0r4Ie0BG2lvuenBrGyC9icaMP672BfEB~JCDyljmkmfvq~H739JlbG~5Lbt1e2FZdyhscTE3k6G61hl~h91VIwhIND~ebNvK4UUxNJZoI0VQE-QAjLugXpfOITbNnJ6i77y7ByZhoZ6npNYFX8jw__",
        "https://s3-alpha-sig.figma.com/img/fa77/1dcf/10c74a1e3997a2073dbca9dfaf960602?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e4TWaWt2GSr2HIkhWsxM72GO7ijyZ7q1iqE-zygyr~7wDIPHGXJv5KkTg2L8H3Ym9fnPjyLpMYtpifLStDE0y9Po7GAnHSkjB40NXazTUBfj6cmYXpMw9KsEqa7CUv-xrpeyem5MuOUIDetJUjDswPLMbOO~wYz3~JJ1h0ruME3dG-xgWaav1PHSCYwFiypNkbSUlR0t7LiAdu0yvvri6toqv489NnzVxuy1EpKWf6behAphYGoYz4rxbTPZ7tVjTHog9~68gAAqbnyYTcNnbF2~NroEYKCpEa~3WMUcE1GKgHF~8594PXAo3qRbNIrrRP1TiK0~K4Xoqz61~Q8f6A__",
      ],
    },
    {
      id: "Cosset Clothing",
      name: "Cosset Clothing",
      logo: "https://s3-alpha-sig.figma.com/img/ce3a/10e2/63ca97914e92b9acb0536892544108ca?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BfC1o6Fk2lQCz3AlTPuCygdDfA4F98ahnFw7IOzbuylOlt-fFcI~bJTFycefO-B~AquVWWWKBlZ0u6XJNn-eqVB2ZyM4GQpOBrd6QFAhlJvCjLp5Moiz2TJGKmOnABU2l~Pwtm61lWj90IF8q3CfLXGTdE4owE6ejXQelVaucSKHivYNeLmZcdWmwnN8CCcPcKx1rQeQH~PiFyCIPT5viClqjqHJGPBM3PfQc5kOejYxRWVVC2m5Z0T26rkIHOsB4NnfHrbMwke3JfICyWkK124DaNSN1-34SYxUpWai4MYHHOXK1OzFAO4MG0Z6RGNkPelz-Q7q60PY289pv3ig-w__",
      rating: 4.9,
      category: "Sustainable Fashion",
      images: [
        "https://s3-alpha-sig.figma.com/img/e4f4/d763/67873b71f9fd507270f445698119a772?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m30iK68EoLYjpZwFsE~YiRJToFVOkGcMcpVhi3bfQeBYZprZCVTpkVe6-mEm1cVl70hqx6DD4~omLPsiOV9S4sB5~9nCNC3GNmKKFnWDgcag3P6MlYhrQyUBzxYXbrUOtcEk4LbuzkZyPYoQ5rlPFtx8F-jVhTe5uHF07wl00FPBDVSLnRO3g8lWGfPBV58Pwb8ZclzT7E2fIzXg-ej1hP2OQmIkvk6u9B8ci4pHMSYqaAokc3f0vsZoI7gKMbhVnLPO8N3MDuiv7wheiv7GuOub~7g~zoPS0IKLmAr40-g5luDnUVdq8iZmEuUR9gxpgwxitx51lqbYcFWzfrI7Tg__",
        "https://s3-alpha-sig.figma.com/img/2f84/2697/37e87a7c710b9822515a1a300badc57a?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=guXiXSWBBr65AVM3DzFlzwbSCesBWJ-jCrQYcap1CIoLRfNhkzHYSSbmRi84hdYxklRmRCJSIsQIvARAKEU0uWDrSMGNNqxY2pfkunK5nb7qEfpeLRAW91FeX~BJelCwH~MexywlGeF8UpKFv62aSAMsgLnNk2xcAZ-Y1RFTqOF5stjDlYbZ9rbgoPj~iJg~HGftz3uU9k58wiK0syY7f~XdnACJI80OD598ARenghZZNR5jrlZbUevbBJawqcq~HZFu85B1-XQeUVJXNI0wKc6UJ40kWVlyxkJr~4ZIpUwb~jFhlr1q9pki4sJzNbiX7tA5Z7O7DjCdiklruWC9dQ__",
        "https://s3-alpha-sig.figma.com/img/2ea2/ac70/130e14aa2c992d53324110bf4f62da98?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JucUWyeGg~Y8xWi6mxS6oCvX~rddLyg1p3Dbzb0ulFH6R0B02lxS~bKxpDlpr8pga008bX8zvls4G4zBKlbfLls7~CG2CavWVar3yHTZOEYw5wvYtn5IBm0N05VOY0jsStOYX0x16esCesD4aHrLbWQEFeIAO5fk-Dv~p-xuXIgvALDNvwnEK09dkHtH6oe65WScinZI9VRhMjvaP-Z-7Zj~hfrkj1Eig-TEIL8ADW12qXdiS0sNvhW5UKyZTvkbD9wFXKoBRO7xR~6MtXWG0E-nZslvvfLkFPnmCntL2OgqAFUxL7~6p3X5GesCVzZnmA6fVroD7iswZIrECqRyqA__",
        "https://s3-alpha-sig.figma.com/img/c60a/decd/14f28e44859a957b1b4d2878a7fe0ff3?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IAKfXQiEOEkpC-wUdJwPMjvs9ZjgaZJ8YZKUy4NAtIuDw9OAgKA7Ev2GY1VgOj6z1hx9gsAtI4VQhblZoWtywiP05rnvxerzK19r-rEwKjoNbk-K83zZhn4a6DsMvGJRG2Zv7yszPMFXyUWBIodtyJpIJwxNQRL6NiN6FSHoXM0DshKVrLlawcV8Txd-cjH6RMFjvXU7M1cUt3rwWWYE9~6c9oV8J8yqF7xp2Lv0HGnuywGwzS874j3nuoZaVAQd9zmoaw3GMj9PNyVcXhZiWrGa4ije6weNDl0WMI~eW5yu4TvelyoLQVyRD5LR-eJPM5aU7VyVYFuY98tX9poKHQ__",
        "https://s3-alpha-sig.figma.com/img/bf9b/a1bd/ddaf630addf6534c91920a022b5a761c?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E6MxElM76UyJXtm8Pbvo03O7s2Op7apgzs~NUdo2c7fXhiyijmiv5ZH0weq1IAR2CcCFF-qoZXKGCu6sBuhOJFtUbz9fDVP5oansyADnRnguampAwmcBupECtcQoreZMyFCVInJ1KMZSM-wzPYr2e2J6IQyA2h0xzbbA-oXucWBFDAypGiA0fZuu~gX7LvEJLBPtDAEAGJL6jahZSjDs5FoA~Xw~oY-0nFGE8t1Ao3FuJWotl08fHKtN~ehjpZyFP2C9Ah7BCz~GCvHugpKVHDUBqrNSRvQpxMiO6OQ1IIs0ig6AxCsW-2cQr0jVo93p1qwln981BE-1BJNb9etC2A__",
      ],
    },
    {
      id: "7.10store",
      name: "7.10store",
      logo: "https://s3-alpha-sig.figma.com/img/9642/3b11/90b2a221b33cb2cd2b9b4f796a7cab6f?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EpnhGafbRIhBgANPpDV1ANXbCSZ18hpZjkWTG4ldl4y2CNcv~Dq6Z808WQ9qxuhT9k2DjVXGiRJ5TmD-YheZR7Q6jA~txjJpAd7wJ5A12hMzoWsN8cu-PgTCv06QQJ9Fb3GSW15sVrNmt5qzawdmqRgM5S-FowVqAdFo1SngrpUjsVp1etuzX9~eSZiE736AS6B1ARrxsu8zGXwmJ2Zoygj12wF7TLhrKOMkRulAdsJQjHsjz9KxD1tdUuVXdzYvNKPhvqQ4stteRDkAgwYCBa3zQfpwqLeQ42jJKXpBKHeunBOsyqO9C5biRm2NrtrtejmdXvC9GGtspK0y36mi4A__",
      rating: 4.7,
      category: "Sneakers",
      images: [
        "https://s3-alpha-sig.figma.com/img/9913/e3cc/b520bfaa154ba3793fb06d060934fb7b?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Klxt4Vqzct58J5yKYVSCrbMwa387HDi-raGHp2MgUqbYluomR0HPewInxFK4ldpmSVFUSjlT-EC7dH2EvrShLnFscri-IjVwFa3p6T6hly7zEqm16UGsON6esmZzhaseD6BKSw8CCk5A6NtpZVkJkmGg2ovm4g6qFcio9ECaG2VxCV59FrQIVBpacA31CWHY~UPB-N-raUnohX-jIKUYS6ceWI9T4zO2ouiQuby0dBVpf9ablaGU-a~BTAuUBl7APRABuHrQryEVV5lZGFjDGWZQlmeFYP7MCvm6kMZO-rgW8-UeXI8F9Fjt37M12GN1DZjsZWQ1xRl-T5pGMGdgRQ__",
        "https://s3-alpha-sig.figma.com/img/4e9a/276b/c7db2895821203179be1579c572e0127?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P6Oj7FikFQrEkGDUuU-co8bM3cmXYATqTxj7NCiNDUXrDQy0rAkk0dcXmuyeja0JrL4zCeG130w3mb7RgdHwfL6uKd0QdRQL5Iu5t~QFV0duJi-FgCkNlxwfe7B0mACZ4jzGvlWUsdrwWFGsK2DjT3p8DrFF6s8ysvqlrPUs~262AqcN4ATQN7O4qTvccKycLm51fgIOE1GCU7Na7jQ4H1cqT4RpxOnyf3SDG4tYK5pLHq2Ukoi0en9adi~llEDOOpg2nYKTEJqWX8JDEC5oFBR-X1RwFhL~7Xy1wpjTjlIKx8AXlRRolnuGYFxwMkZBEQY5dcZpcPlgPwK0K2q0IQ__",
        "https://s3-alpha-sig.figma.com/img/0d30/c032/2a433f89e62f9c08ddb6125f18fdf36d?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z31e2sBAgS3mrIWuHZsX0LEvk96yU7KKSyvdriIY0hVMuGS5ETKBRJ~yNmr2YInFv~0UqBvvwdkxxOnPUVapOLkokx7-cLjS3Xo05fWmYRkgzOQG37pL0snhGyQH~EfmZUQP82djZT90KIArUJDVl6fRUYL3JBQWIj5nvNBANk8itBgljKCbGyf0sINdPUEoTcnzbCALnr7R371qZk9YuP5meHwjVNB7bmUQyuy7uhAntlSoObY4JlqDiRz5sYjNmkcgLdoG0JFyKV-X2UAL3Sfq8P6gKhQZvKYqt03TaMQ7l4-Xmf-IY9JL3en8zHrajeX4YZddojpXUoB-QQIX7Q__",
        "https://s3-alpha-sig.figma.com/img/d3c9/fce5/a0eb7a2086ca1df9add51173c0a2d20c?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ReYyMpl2ZEdVRvu722uzvcf6HIZYRf0R6OlvatzJlpiFuTfUtUzSsrXV8~jR-wj9-zsWdgewsYienHt5-j~ES1hUtU1GtWOPr-TNAc42nP1tJ4qbcLl1pW1eBjH7vmE4Ff6OS9qUE9WlXno00aqBbgbcmlWWy0VpAJADtvK3ub1t-ih0AMAGrvkfVSVbKFSsQHvlD56vxYXV-5j0eepEAM6a1nm6lFTLIvVzMGGb9x~ymoPNDKoI6oU1~XlYH3zienAR3ie5ccUKfluMA4iU~0IeE5uvn449EJvo7CLr4pz2P7LGGj-6t09TVdXnH1fdWiYZqRiejTSWeAU7Yyr-qA__",
        "https://s3-alpha-sig.figma.com/img/34d3/86e5/42610dc802dad82c4fee41d32ea223d9?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ASKur-~Q3Dntq35qylb6p2f1Q0zrXp1B1U27tX8uhiT6u7a1mNtryG4x9hJ33CGQcoPGE3i44BHsPJ95Q8d6RtC9mHRt6YZ57-iipH5bm6ebjTW1necIC5dpbiRUJe7QogcEGFQSA7z0Jt~0JgqSPRUvyuovg-g8eliBbC57AGzBmROQ2DRkUrm~wbrPioV2QFgKEm1RmRuw4CBHzf9-IZu6jH-gUeLx1o~5acpKQnbiugqAARXswzLF6u9VusFQ5CqhI0dMAOFpNBxGOJS-JfAYDti5L2cQ9rA8XlkV5UYh9StjRTCQHZLIjY1o94toRI2I1p3m~~PvqeZOpxhtvQ__",
      ],
    },
  ];

  const handleSelect = (storeid) => {
    setSelectedStores((prevSelectedStores) => {
      if (prevSelectedStores.includes(storeid)) {
        return prevSelectedStores.filter((id) => id !== storeid);
      } else {
        return [...prevSelectedStores, storeid];
      }
    });
  };

  async function handleContinue() {
    try {
      //Make the backend code
      setTimeout(() => {
        const response = selectedStores.length >= 3;
        if (response) {
          console.log("success");
          navigate("/buyer/home");
        } else {
          alert("Some error occucred, Try again.");
        }
      }, 1000);
    } catch (error) {
      alert("Some error occucred.");
    }
  }

  return (
    <>
      <div className="bg-white h-screen w-full relative">
        <div className="w-full flex flex-col items-center justify-center">
          { !searching ? (
            <div className="fixed z-50 bg-white h-[80px] top-0 Header flex items-center w-full justify-between  p-[27px]">
              <h1 className="font-medium text-[36px]">discover</h1>
              <button id="search" onClick={handleSearchClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    d="M27.6935 32.0257L17.9373 22.3062C17.1675 22.902 16.2675 23.3677 15.2373 23.7031C14.2071 24.038 13.1334 24.2054 12.0162 24.2054C9.13596 24.2054 6.70288 23.2125 4.71697 21.2266C2.73105 19.2407 1.7381 16.8326 1.7381 14.0024C1.7381 11.1472 2.73105 8.72658 4.71697 6.74066C6.70288 4.75416 9.12345 3.7609 11.9787 3.7609C14.8089 3.7609 17.217 4.75416 19.2029 6.74066C21.1894 8.72658 22.1826 11.1472 22.1826 14.0024C22.1826 15.0945 22.0212 16.1373 21.6982 17.1305C21.3753 18.1232 20.8912 19.0416 20.2459 19.8859L30.0396 29.6797L27.6935 32.0257ZM11.9787 20.8914C13.9151 20.8914 15.5474 20.2211 16.8755 18.8805C18.2037 17.5398 18.8677 15.9138 18.8677 14.0024C18.8677 12.0659 18.2037 10.4336 16.8755 9.10553C15.5474 7.77682 13.9151 7.11246 11.9787 7.11246C10.0172 7.11246 8.37866 7.77682 7.06306 9.10553C5.74746 10.4336 5.08966 12.0659 5.08966 14.0024C5.08966 15.9138 5.74746 17.5398 7.06306 18.8805C8.37866 20.2211 10.0172 20.8914 11.9787 20.8914Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <div className="fixed z-50 bg-white h-[80px] top-0 Header flex items-center w-full justify-between p-[27px]">
              <input
                type="text" 
                placeholder="Search stores..."
                className="w-full p-3 border text-base rounded bg-[#2C2C2C] text-white"
                // Add additional onChange handler as needed for searching functionality
              />
              <button
                onClick={handleSearchClose}
                className="ml-2 p-3 bg-black text-white rounded"
              >
                Close
              </button>
            </div>
          )}
          <div className="pt-[100px] pb-3 To_choose  flex-shrink-0 px-4  text-[20px]">
            Choose five or more accounts below, to help us curate your
            personalised feed.
          </div>

          <div className="flex flex-col gap-2 mb-[50px]">
            {storesData.map((store) => (
              <Store
                key={store.id}
                store={store}
                isSelected={selectedStores.includes(store.id)}
                onSelect={handleSelect}
              />
            ))}
          </div>

          <div className="fixed bottom-[10px] w-full flex justify-center">
            <button
              onClick={handleContinue}
              className={` px-[36px] py-2 rounded-3xl shadow-lg ${
                selectedStores.length >= 3
                  ? "bg-black text-white cursor-pointer animate-floatUp"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed hidden"
              } `}
              disabled={selectedStores.length < 3}
              style={{
                animation:
                  selectedStores.length >= 3 ? "floatUp 0.6s ease-in" : "none",
              }}
            >
              Continue ({selectedStores.length})
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Discover;
