import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";

const references = [
  ["All Asia TCN. (n.d.). Acystopteris tenuisecta (Blume) Tagawa (NY 04065839; E. D. Merrill 8381, Pauai, Benguet, May 1911) [Herbarium specimen record]. All Asia TCN.", "https://allasiatcn.org/"],
  ["Chua-Barcelo, R. T. (2014). Ethno-botanical survey of edible wild fruits in Benguet, Cordillera administrative region, the Philippines. Asian Pacific Journal of Tropical Biomedicine, 4(Suppl. 1), S525–S538.", "https://doi.org/10.12980/APJTB.4.201414B36"],
  ["Co's Digital Flora of the Philippines. (n.d.). Asteraceae.", "https://www.philippineplants.org/Families/Asteraceae.html"],
  ["Co's Digital Flora of the Philippines. (n.d.). Balsaminaceae.", "https://www.philippineplants.org/Families/Balsaminaceae.html"],
  ["Co's Digital Flora of the Philippines. (n.d.). Lamiaceae.", "https://www.philippineplants.org/Families/Lamiaceae.html"],
  ["Co's Digital Flora of the Philippines. (n.d.). Melastomataceae.", "https://www.philippineplants.org/Families/Melastomataceae.html"],
  ["Co's Digital Flora of the Philippines. (n.d.). Nephrolepidaceae.", "https://www.philippineplants.org/Families/Nephrolepidaceae.html"],
  ["Co's Digital Flora of the Philippines. (n.d.). Pinaceae.", "https://www.philippineplants.org/Families/Pinaceae.html"],
  ["Co's Digital Flora of the Philippines. (n.d.). Thelypteridaceae.", "https://www.philippineplants.org/Families/Thelypteridaceae.html"],
  ["Department of Agriculture, Agricultural Training Institute. (2022). Weedibles and weedicinals plus edible flowers and more.", "https://ati2.da.gov.ph/ati-4a/content/sites/default/files/2022-09/WEEDIBLES%20AND%20WEEDICINALS%20Plus%20Edible%20Flowers%20and%20More.pdf"],
  ["Duke University, Fern Labs. (2016, December 1). Acystopteris tenuisecta (Blume) Tagawa.", "https://fernlab.biology.duke.edu/node/24673"],
  ["Flora of China Editorial Committee. (n.d.). Acystopteris tenuisecta (Blume) Tagawa. In Flora of China. eFloras.", "https://www.efloras.org/florataxon.aspx?flora_id=3&taxon_id=200003645"],
  ["International Centre for Integrated Mountain Development. (n.d.). Youngia japonica (Oriental Hawkweed). The Living Mountain Lab.", "https://lml-database.icimod.org/detail/youngia-japonica"],
  ["JACQ Virtual Herbaria. (n.d.). Coleus scutellarioides (L.) Benth. [Herbarium specimen WU 0166266].", "https://jacq.org/detail/2274790"],
  ["JACQ Virtual Herbaria. (n.d.). Coleus scutellarioides (L.) Benth. [Herbarium specimen WU 0166263].", "https://jacq.org/detail/2274774"],
  ["Otana, J. B., & Flora, E. C. (2024). Ensuring a sustainable future for Benguet pines in the Cordillera Administrative Region. Ecosystems Research and Development Bureau, Department of Environment and Natural Resources.", "https://erdbservices.denr.gov.ph/eskris/iec_for_guest.php?operation=view&pk0=521"],
  ["PROSEA Network. (n.d.). Dianella ensifolia (L.) DC. (Record No. 1061). Plant Resources of South-East Asia.", "https://prosea.prota4u.org/view.aspx?id=1061"],
  ["PROSEA Network. (n.d.). Nephrolepis Schott (Record No. 3195). Plant Resources of South-East Asia.", "https://prosea.prota4u.org/view.aspx?id=3195"],
  ["PROSEA Network. (n.d.). Pinus kesiya Royle ex Gordon (Record No. 3707). Plant Resources of South-East Asia.", "https://prosea.prota4u.org/view.aspx?id=3707"],
  ["PROSEA Network. (n.d.). Plectranthus scutellarioides (L.) R.Br. (Record No. 385). Plant Resources of South-East Asia.", "https://prosea.prota4u.org/view.aspx?id=385"],
  ["Royal Botanic Gardens, Kew. (n.d.). Coleus scutellarioides (L.) Benth. Plants of the World Online.", "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:446165-1"],
  ["Royal Botanic Gardens, Kew. (n.d.). Dianella ensifolia (L.) Redouté. Plants of the World Online.", "https://powo.science.kew.org/taxon/533828-1"],
  ["Royal Botanic Gardens, Kew. (n.d.). Dryopteris sparsa (D.Don) Kuntze. Plants of the World Online.", "https://powo.science.kew.org/taxon/17100280-1"],
  ["Royal Botanic Gardens, Kew. (n.d.). Impatiens platypetala Lindl. Plants of the World Online.", "https://powo.science.kew.org/taxon/374276-1"],
] as const;

export default function ReferencesPage() {
  return (
    <div
      className="min-h-screen flex flex-col text-[#3D2B20] font-sans antialiased selection:bg-[#C99545]/40"
      style={{
        backgroundImage:
          "radial-gradient(circle at 10% 8%, rgba(183,191,114,.28), transparent 38%), radial-gradient(circle at 92% 30%, rgba(201,149,69,.18), transparent 40%)",
        backgroundColor: "#F5F0E1",
        backgroundAttachment: "fixed",
      }}
    >
      <Navbar foundPlants={{}} />
      <main className="flex-1 w-full max-w-[1100px] mx-auto px-5 py-12">
        <div className="mb-8 max-w-[720px]">

          <h1 className="font-fraunces mt-4 mb-0 text-4xl font-bold text-[#3D2B20] sm:text-5xl">
            References
          </h1>
          <p className="mt-3 mb-0 text-base leading-relaxed text-[#5A4739]">
            The sources used to research and identify the native plants featured in Floracle.
          </p>
        </div>

        <ol className="list-decimal space-y-4 pl-6 text-sm leading-7 text-[#3D2B20] marker:font-bold marker:text-[#68752B]">
          {references.map(([citation, href]) => (
            <li key={href} className="pl-2">
              <span>{citation}</span>
              <span className="block break-all text-xs text-[#68752B]">{href}</span>
            </li>
          ))}
        </ol>
      </main>
      <Footer />
    </div>
  );
}
