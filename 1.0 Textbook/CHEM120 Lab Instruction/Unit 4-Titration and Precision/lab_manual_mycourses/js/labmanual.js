<!--PRINTABLE AREA-->

function printDiv(printableArea) {
    var printContents = document.getElementById(printableArea).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}


<!-- MSDS -->

function safety(chemicals) {
    var safety_statements = {

        '1-Methylimidazole': {
            'link': 'https://fscimage.fishersci.com/msds/86343.htm'
            , 'name': '1-Methylimidazole'
            , 'aka': 'N-methylimidazole'
            , 'hazard': 'very harmful in contact with eyes/skin or if swallowed or inhaled (wear gloves); combustible'
        },

        '2,5-dimethyl-2,5-hexanediol': {
            'link': 'https://www.fishersci.com/shop/msdsproxy?productName=AC162500050&productDescription=2%2C5-DIMETHYL-2%2C5-HEXANEDI+5GR&catNo=AC162500050&vendorId=VN00032119&storeId=10652'
            , 'name': '2,5-dimethyl-2,5-hexanediol'
            , 'aka': ''
            , 'hazard': 'corrosive (wear gloves); may cause eye damage'
        },

        '40TCPP': {
            'link': 'https://www.chemblink.com/MSDS/MSDSFiles/14609-54-2_Strem.pdf'
            , 'name': '40TCPP'
            , 'aka': ''
            , 'hazard': 'may cause skin irritation'
        },

        'acetanilide': {
            'link': 'https://beta-static.fishersci.com/content/dam/fishersci/en_US/documents/programs/education/regulatory-documents/sds/chemicals/chemicals-a/S25117.pdf'
            , 'name': 'Acetanilide'
            , 'aka': ''
            , 'hazard': 'causes skin and eye irritation; harmful if swallowed; harmful to aquatic life'
        },

        'acetic acid': {
            'link': 'https://www.fishersci.com/msdsproxy%3FproductName%3DAC423220025%26productDescription%3DACETIC%2BACID%252C%2BGLACIA%2B2.5L%26catNo%3DAC42322-0025%2B%26vendorId%3DVN00033901%26storeId%3D10652'
            , 'name': 'Acetic acid'
            , 'aka': ''
            , 'hazard': 'flammable; causes severe skin burns and eye damage'
        },

        'acetic anhydride': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=S25119A&productDescription=ACETIC+ANHYDRIDE+500ML&vendorId=VN00115888&countryCode=US&language=en'
            , 'name': 'Acetic anhydride'
            , 'aka': ''
            , 'hazard': 'flammable; toxic; harmful if swallowed or inhaled; causes severe skin burns and eye damage; do not handle outside of fumehood'
        },

        'acetone': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=S25120C&productDescription=acetone&vendorId=VN00115888&keyword=true&countryCode=US&language=en'
            , 'name': 'Acetone'
            , 'aka': ''
            , 'hazard': 'highly flammable; causes serious eye irritation'
        },

        'acetophenone': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=A22500&productDescription=acetophenone-certified-acs-fisher-chemical&vendorId=VN00033897&keyword=true&countryCode=US&language=en'
            , 'name': 'Acetophenone'
            , 'hazard': 'combustible liquid; harmful if swallowed; causes serious eye irritation'
        },

        'acetyl chloride': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=A27250&productDescription=acetyl-chloride-certified-fisher-chemical&vendorId=VN00033897&keyword=true&countryCode=US&language=en'
            , 'name': 'Acetyl chloride'
            , 'aka': ''
            , 'hazard': 'highly flammable liquid and vapour; causes severe skin burns and eye damage'
        },

        'acetylacetone': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=A25500&productDescription=acetyl-acetone-certified-acs-fisher-chemical&vendorId=VN00033897&keyword=true&countryCode=US&language=en'
            , 'name': 'Acetylacetone'
            , 'aka': '2,4-Pentanedione'
            , 'hazard': 'flammable; harmful if swallowed; toxic in contact with skin or if inhaled'
        },

        'ammonium formate': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=AC401152500&productDescription=ammonium-formate--acros-organicstrade&vendorId=VN00032119&keyword=true&countryCode=US&language=en'
            , 'name': 'Ammonium formate'
            , 'aka': ''
            , 'hazard': 'causes skin, eye, and respiratory irritation; may form combustible dust concentrations in air'
        },

        'ammonia': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=S25164A&productDescription=ammonia-solution&vendorId=VN00115888&keyword=true&countryCode=US&language=en'
            , 'name': 'Aqueous ammonia'
            , 'aka': 'Ammonium hydroxide'
            , 'hazard': 'causes severe skin burns and eye damage; may cause respiratory irritation; very toxic to aquatic life'
        },

        'Benedict': {
            'link': 'http://www.sciencelab.com/msds.php?msdsId=9925648'
            , 'name': "Benedict's Reagent"
            , 'aka': ''
            , 'hazard': 'Hazardous in case of eye contact (irritant), of ingestion, of inhalation. Slightly hazardous in case of skin contact (irritant); liquid or spray mist may produce tissue damage particularly on mucous membranes of eyes, mouth and respiratory tract. Skin contact may produce burns. Inhalation of the spray mist may produce severe irritation of respiratory tract, characterized by coughing, choking, or shortness of breath.'
        },

        'benzophenone': {
            'link': 'http://www.sciencelab.com/msds.php?msdsId=9927097'
            , 'name': 'Benzophenone'
            , 'aka': ''
            , 'hazard': 'hazardous in case of skin/eye contact and inhalation/ingestion; toxic to aquatic life'
        },

        'benzylamine': {
            'link': 'https://fscimage.fishersci.com/msds/81885.htm'
            , 'name': 'Benzylamine'
            , 'aka': ''
            , 'hazard': 'causes eye, skin, and respiratory burns; toxic if inhaled or absorbed through the skin; combustible; measure this chemical in a fumehood, and cover your beaker when transferring it to your own workstation to minimize odor'
        },

        'bipyridyl': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=AA3056918&productDescription=bipyridine-acs-&vendorId=VN00024248&keyword=true&countryCode=US&language=en'
            , 'name': '2,2\'-Bipyridyl'
            , 'aka': ''
            , 'hazard': 'toxic if swallowed; harmful in contact with skin'
        },

        'DPPE': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=AC147910010&productDescription=bisdiphenylphosphinoethane-plus-acros-organicstrade&vendorId=VN00032119&keyword=true&countryCode=US&language=en'
            , 'name': 'Bis(diphenylphosphino)ethane'
            , 'aka': ''
            , 'hazard': 'causes skin, eye, and respiratory irritation; may form combustible dust concentrations in air'
        },

        'bromobenzene': {
            'link': 'https://beta-static.fishersci.com/content/dam/fishersci/en_US/documents/programs/education/regulatory-documents/sds/chemicals/chemicals-b/S25665A.pdf'
            , 'name': 'Bromobenzene'
            , 'aka': ''
            , 'hazard': 'flammable; cause skin irritation; toxic to aquatic life; do not handle outside fumehood'
        },

        'bromobutane': {
            'link': 'http://dept.harpercollege.edu/chemistry/sds/1-bromobutane.pdf'
            , 'name': 'Bromobutane'
            , 'aka': ''
            , 'hazard': 'flammable; hazardous in case of skin/eye contact and ingestion or inhalation'
        },

        'bromophenacyl bromide': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=AC112682500&productDescription=dibromoacetophenone--acros-organicstrade&vendorId=VN00032119&keyword=true&countryCode=US&language=en'
            , 'name': '4-Bromophenacyl bromide'
            , 'aka': 'Dibromoacetophenone'
            , 'hazard': 'causes severe skin burns and eye damage '
        },

        'bromotetradecane': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=AC187381000&productDescription=bromotetradecane--acros-organicstrade&vendorId=VN00032119&keyword=true&countryCode=US&language=en'
            , 'name': '1-Bromotetradecane'
            , 'aka': ''
            , 'hazard': 'n/a'
        },

        'tert-butanol': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=A401500&productDescription=tertbutanol-certified-fisher-chemical&vendorId=VN00033897&keyword=true&countryCode=US&language=en'
            , 'name': 'tert-Butanol'
            , 'aka': ''
            , 'hazard': 'highly flammable; causes eye and respiratory irritation; harmful if inhaled'
        },

        'n-butyllithium': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=AC181275000&productDescription=nbutyllithium-m-solution-in-hexanes-acrosealtrade-acros-organicstrade&vendorId=VN00032119&keyword=true&countryCode=US&language=en'
            , 'name': 'n-Butyllithium'
            , 'aka': ''
            , 'hazard': 'spontaneously flammable in air; highly flammable liquid and vapour; may be fatal if ingested; causes severe skin burns, eye damage, respiratory irritation; reacts violently with water '
        },

        'calcium chloride': {
            'link': 'http://www.sciencelab.com/msds.php?msdsId=9923251'
            , 'name': 'Calcium chloride'
            , 'aka': ''
            , 'hazard': 'Hazardous in case of skin contact (irritant), of eye contact (irritant), of ingestion, of inhalation. Slightly hazardous in case of\n' +
            'skin contact (permeator).'
        },

        'chlorobenzaldehyde': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=AC150440050&productDescription=4-CHLOROBENZALDEHYDE%2C+98+5KG&vendorId=VN00032119&countryCode=US&language=en'
            , 'name': '4-Chlorobenzaldehyde'
            , 'aka': ''
            , 'hazard': 'harmful if swallowed; causes skin, eye, and respiratory irritation; avoid breathing dust'
        },

        'chloroform': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=AC364320025&productDescription=chloroform--acros-organicstrade&vendorId=VN00032119&keyword=true&countryCode=US&language=en'
            , 'name': 'Chloroform'
            , 'aka': ''
            , 'hazard': 'harmful if swallowed; causes skin and eye irritation; toxic if inhaled; suspected carcinogen'
        },

        'copper nitrate': {
            'link': 'http://www.sciencelab.com/msds.php?msdsId=9927142',
            'name': 'Copper nitrate',
            'aka': '',
            'hazard': 'Slightly hazardous in case of skin contact (sensitizer).  Repeated or prolonged exposure to the\n' +
        'substance can produce target organs damage.'
        },

        'copper sulfate': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=BP346500&productDescription=copper-ii-sulfate-pentahydrate-crystalline-blue-fisher-bioreagents&vendorId=VN00033897&keyword=true&countryCode=US&language=en'
            , 'name': 'Copper (II) sulfate pentahydrate'
            , 'aka': ''
            , 'hazard': 'harmful if swallowed; causes skin and eye irritation'
        },
         'cobalt chloride': {
             'link': 'http://www.sciencelab.com/msds.php?msdsId=9925768',
             'name': 'cobalt (II) chloride solution with HCl',
             'aka': '',
             'hazard': 'Very hazardous in case of skin contact (irritant), of eye contact (irritant), of ingestion, . Hazardous in case of skin contact (corrosive, sensitizer, permeator), of eye contact (corrosive), of inhalation (lung sensitizer). Non-corrosive for lungs. Liquid or spray mist may produce tissue damage particularly on mucous membranes of eyes, mouth and respiratory tract. Severe over-exposure can result in death.'
         },
        'crystal violet': {
            'link': 'https://www.fishersci.com/shop/msdsproxy?productName=23270180&productDescription=GRAM+STAIN+CRYSTL+VIOLET+GAL&catNo=23-270-180&vendorId=VN00008297&storeId=10652'
            , 'name': 'Crystal Violet'
            , 'aka': ''
            , 'hazard': 'flammable and hazardous in case of ingestion or inhalation. It will also dye your hand purple for a couple of days, so you may want to wear gloves.'
        },

        'cyclohexanol': {
            'link': 'https://fscimage.fishersci.com/msds/05880.htm'
            , 'name': 'Cyclohexanol'
            , 'aka': ''
            , 'hazard': 'flammable; harmful in case of skin/eye contact or inhalation/ingestion'
        },

        'cyclohexanone': {
            'link': 'https://www.fishersci.com/msdsproxy%3FproductName%3DC5504%26productDescription%3DCYCLOHEXANONE%2BPURIFIED%2B4L%26catNo%3DC550-4%26vendorId%3DVN00033897%26storeId%3D10652'
            , 'name': 'Cyclohexanone'
            , 'aka': ''
            , 'hazard': 'flammable; harmful in case of skin/eye contact or inhalation/ingestion'
        },

        'dichloromethane': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=AC406920010&productDescription=dichloromethane--acs-reagent-stabilized-with-amylene-acros-organicstrade&vendorId=VN00033901&keyword=true&countryCode=US&language=en'
            , 'name': 'Dichloromethane'
            , 'aka': 'Methylene chloride'
            , 'hazard': 'causes skin and eye irritation; toxic; permeates latex and nitrile gloves; do not use outside fumehood'
        },

        'diethyl ether': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=AC444260050&productDescription=diethyl-ether-technical-stabilized-acros-organicstrade&vendorId=VN00032119&keyword=true&countryCode=US&language=en'
            , 'name': 'Diethyl ether'
            , 'aka': 'Ether'
            , 'hazard': 'extremely flammable; harmful if swallowed; may cause respiratory irritation and dizziness'
        },

        'dimethoxytetrahydrofuran': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=AC115675000&productDescription=dimethoxytetrahydrofuran--mixture-of-cis-and-trans-isomers-acros-organicstrade&vendorId=VN00032119&keyword=true&countryCode=US&language=en'
            , 'name': 'Dimethoxytetrahydrofuran'
            , 'aka': ''
            , 'hazard': 'flammable; causes serious eye irritation; toxic if inhaled'
        },

        'ethanol': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=AC615110040&productDescription=ethanol--proof--reagent-acs-spectrophotometric-grade-acros-organicstrade&vendorId=VN00033901&keyword=true&countryCode=US&language=en'
            , 'name': 'Ethanol'
            , 'aka': 'Ethyl alcohol'
            , 'hazard': 'highly flammable; hazardous in case of skin/eye contact and inhalation or ingestion'
        },

        'ethyl acetate': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=AC149470025&productDescription=ethyl-acetate-plus-acros-organicstrade&vendorId=VN00033901&keyword=true&countryCode=US&language=en'
            , 'name': 'Ethyl acetate'
            , 'aka': ''
            , 'hazard': 'highly flammable; hazardous in case of skin/eye contact and inhalation or ingestion'
        },

        'ethylene glycol': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=AC444230050&productDescription=ethylene-glycol-acros-organics&vendorId=VN00032119&keyword=true&countryCode=US&language=en'
            , 'name': 'Ethylene glycol'
            , 'aka': ''
            , 'hazard': 'harmful if swallowed'
        },

        'formylbenzoic acid': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=AAA1527718&productDescription=carboxybenzaldehyde-&vendorId=VN00024248&keyword=true&countryCode=US&language=en'
            , 'name': '4-Formylbenzoic acid'
            , 'aka': '4-Carboxybenzaldehyde'
            , 'hazard': 'causes skin, eye, and respiratory irritation '
        },

        'hexanes': {
            'link': 'https://beta-static.fishersci.com/content/dam/fishersci/en_US/documents/programs/education/regulatory-documents/sds/chemicals/chemicals-h/S25352A.pdf'
            , 'name': 'Hexanes'
            , 'aka': ''
            , 'hazard': 'flammable; volatile; neurotoxic; hazardous in case of skin/eye contact and inhalation or ingestion; do not use outside of fumehood'
        },

        'hydrochloric acid': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=AC450550025&productDescription=hydrochloric-acid--acros-organics&vendorId=VN00032119&keyword=true&countryCode=US&language=en'
            , 'name': 'Hydrochloric acid'
            , 'aka': ''
            , 'hazard': 'causes severe skin burns, eye damage, and respiratory irritation (wear gloves); corrosive; do not handle outside of fumehood'
        },
         'hydrogen peroxide': {
             'link': 'http://www.sciencelab.com/msds.php?msdsId=9924299',
             'name': 'hydrogen peroxide',
             'aka': '',
             'hazard': ' very hazardous in case of skin contact (irritant) and of eye contact(irritant). Hazardous in case of skin contact (corrosive),of eye contact (corrosive) and of ingestion. Slightly hazardous in case of inhalation (lung sensitizer). Liquid or spray mist may produce tissue damage particularly on mucous membranes of eyes, mouth and respiratory tract. Skin contact may produce burns. Prolonged exposure may result in skin burns and ulcerations.'
         },
        'imidazole': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=O3196500&productDescription=imidazole-certified-acs-fisher-chemical&vendorId=VN00033897&keyword=true&countryCode=US&language=en'
            , 'name': 'Imidazole'
            , 'aka': ''
            , 'hazard': 'may form combustible dust concentrations in air; harmful if swallowed; may cause severe skin burns, eye damage, and respiratory irritation; suspected teratogen'
        },

        'indium-tin oxide': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=AA3634822&productDescription=indium-tin-oxide--metals-basis-alfa-aesartrade&vendorId=VN00024248&keyword=true&countryCode=US&language=en'
            , 'name': 'Indium-tin oxide'
            , 'aka': ''
            , 'hazard': 'n/a'
        },

        'iodophenol': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=AC122390100&productDescription=iodophenol--acros-organicstrade&vendorId=VN00032119&keyword=true&countryCode=US&language=en'
            , 'name': '4-Iodophenol'
            , 'aka': ''
            , 'hazard': 'harmful if swallowed, inhaled, or in contact with skin; causes severe skin burns, eye damage, and respiratory irritation'
        },

        'iron chloride': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=AC125030250&productDescription=ironiii-chloride-hexahydrate--extra-pure-acros-organicstrade&vendorId=VN00032119&keyword=true&countryCode=US&language=en'
            , 'name': 'Iron (III) chloride hexahydrate'
            , 'aka': ''
            , 'hazard': 'harmful if swallowed; causes skin irritation and serious eye damage; may cause an allergic skin reaction'
        },

        'ironnitrate': {
            'link': 'http://www.ch.ntu.edu.tw/~genchem99/msds/exp9/Fe(NO3)3.pdf'
            , 'name': 'Iron(III) nitrate'
            , 'aka': ''
            , 'hazard': 'causes eye, skin irritation and irritation in case of inhalation or ingestion. It may cause CNS depression, kidney damage, kidney damage and cardiac disturbances if ingested.'
        },

        'KSCN': {
            'link': 'http://www.sciencelab.com/msds.php?msdsId=9927574'
            , 'name': 'Potassium thiocyanate'
            , 'aka': ''
            , 'hazard': 'hazardous in case of skin contact (irritant, permeator) of eye contact(irritant) of ingestion and of inhalation(lung irritant).'
        },

        'lawsone': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=AC121631000&productDescription=hydroxypnaphthoquinone--acros-organicstrade&vendorId=VN00032119&keyword=true&countryCode=US&language=en'
            , 'name': 'Lawsone'
            , 'aka': '2-Hydroxy-1,4-naphthoquinone'
            , 'hazard': 'harmful if swallowed; causes skin and eye irritation; suspected teratogen'
        },

        'magnesium': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=S25411A&productDescription=MAGNESIUM+METAL+TURNINGS+100G&vendorId=VN00115888&countryCode=US&language=en'
            , 'name': 'Magnesium turnings'
            , 'aka': ''
            , 'hazard': 'releases flammable gases in contact with water'
        },

        'magnesium sulfate': {
            'link': 'http://www.sciencelab.com/msds.php?msdsId=9927218'
            , 'name': 'Magnesium sulfate'
            , 'aka': 'epsom salt'
            , 'hazard': 'Hazardous in case of ingestion. Slightly hazardous in case of skin contact (irritant), of eye contact (irritant), of inhalation.'
        },

        'methanol': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=A43420&productDescription=methanol-certified-acs-fisher-chemical&vendorId=VN00033897&keyword=true&countryCode=US&language=en'
            , 'name': 'Methanol'
            , 'aka': 'Methyl alcohol'
            , 'hazard': 'highly flammable; toxic if swallowed, inhaled, or in contact with skin; causes damage to organs'
        },

        'methyl butenal': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=AAB2222614&productDescription=methylbutenal-&vendorId=VN00024248&keyword=true&countryCode=US&language=en'
            , 'name': '3-Methyl-2-butenal'
            , 'aka': ''
            , 'hazard': 'flammable; harmful if swallowed; toxic if inhaled; causes skin, eye, and respiratory irritation; may cause an allergic skin reaction'
        },

        'methylamine': {
            'link': 'http://www.synquestlabs.com/msds/3130-1-21.pdf'
            , 'name': 'Methylamine in ethanol'
            , 'aka': ''
            , 'hazard': 'highly flammable; harmful by inhalation and if swallowed; corrosive'
        },

        'nickel chloride': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=AA1237236&productDescription=nickelii-chloride-hexahydrate--metals-basis-alfa-aesartrade&vendorId=VN00024248&keyword=true&countryCode=US&language=en'
            , 'name': 'Nickel (II) chloride hexahydrate'
            , 'aka': ''
            , 'hazard': 'toxic if swallowed or inhaled; suspected carcinogen and teratogen; causes skin irritation; may cause an allergic skin reaction'
        },

        'nickel nitrate': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=N62500&productDescription=nickel-nitrate-hexahydrate-crystallinecertified-fisher-chemical&vendorId=VN00033897&keyword=true&countryCode=US&language=en'
            , 'name': 'Nickel (II) nitrate hexahydrate'
            , 'aka': ''
            , 'hazard': 'oxidizer (may intensify fire); harmful if swallowed or inhaled; causes skin irritation and serious eye damage; suspected carcinogen and teratogen; may cause allergy or asthma symptoms and respiratory irritation'
        },

        'nitricacid': {
            'link': ' http://www.sciencelab.com/msds.php?msdsId=9926241'
            , 'name': 'Nitric acid'
            , 'aka': ''
            , 'hazard': 'corrosive and a powerful oxidizing agent. It will hydrolyse skin, so it is of utmost importance to be wearing gloves, lab coat and safety glasses when handling nitric acid. Nitric acid on the skin can also stain the skin yellow. If you get nitric acid on yourself you should rinse the affected area with cold water for 15 minutes. Any clothing contaminated with nitric acid (including gloves) should be removed immediately as the acid will do damage to the skin underneath. Do not mix nitric acid with other chemicals unless instructed to do so. Nitric acid is also a skin irritant, (permeator) an eye irritant and an irritant due to ingestion and inhalation.'
        },

        'nitrobenzaldehyde': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=AC156995000&productDescription=nitrobenzaldehyde--acros-organicstrade&vendorId=VN00032119&keyword=true&countryCode=US&language=en'
            , 'name': '4-Nitrobenzaldehyde'
            , 'aka': ''
            , 'hazard': 'causes serious eye irritation; may cause an allergic skin reaction'
        },

        'nonanal': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=AC357571000&productDescription=nonyl-aldehyde--acros-organicstrade&vendorId=VN00032119&keyword=true&countryCode=US&language=en'
            , 'name': 'Nonanal'
            , 'aka': 'Nonyl aldehyde'
            , 'hazard': 'combustible; causes skin, eye, and respiratory irritation'
        },

        'p-aminophenol': {
            'link': 'https://www.fishersci.com/shop/msdsproxy?storeId=10652&productName=AC400950050&productDescript'
            , 'name': 'p-Aminophenol'
            , 'aka': '4-Aminophenol'
            , 'hazard': 'harmful if swallowed or inhaled; may cause an allergic skin reaction'
        },

        'pd/c': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=AAA1201209&productDescription=palladium--on-carbon-type--dry&vendorId=VN00024248&keyword=true&countryCode=US&language=en'
            , 'name': '10% Palladium on carbon'
            , 'aka': ''
            , 'hazard': 'flammable'
        },

        'pentanone': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=AC155810025&productDescription=pentanone--acros-organicstrade&vendorId=VN00032119&keyword=true&countryCode=US&language=en'
            , 'name': '3-Pentanone'
            , 'aka': 'Diethyl ketone'
            , 'hazard': 'highly flammable; causes eye and respiratory irritation'
        },

        'phenacyl bromide': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=AC152011000&productDescription=bromoacetophenone--acros-organicstrade&vendorId=VN00032119&keyword=true&countryCode=US&language=en'
            , 'name': 'Phenacyl bromide'
            , 'aka': 'Bromoacetophenone'
            , 'hazard': 'toxic if swallowed or inhaled; causes severe skin burns and eye damage'
        },

        'petroleum ether': {
            'link': 'https://www.fishersci.com/msdsproxy%3FproductName%3DP4804%26productDescription%3DPET%2BETHER%2BPESTICIDE%2BCERT%2B4L%26catNo%3DP480-4%26vendorId%3DVN00033897%26storeId%3D10652'
            , 'name': 'Petroleum ether'
            , 'aka': ''
            , 'hazard': 'highly flammable; hazardous in case of inhalation or ingestion'
        },

        'phenolphthalein': {
            'link': 'http://www.sciencelab.com/msds.php?msdsId=9926477'
            , 'name': 'Phenolphthalein'
            , 'aka': ''
            , 'hazard': 'hazardous in case of skin contact(irritant), of eye contact(irritant) and of ingestion. It is slightly hazardous in case of skin contact(permeator).'
        },

        'phenylacetylene': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=AC152465000&productDescription=phenylacetylene--pure-acros-organicstrade&vendorId=VN00032119&keyword=true&countryCode=US&language=en'
            , 'name': 'Phenylacetylene'
            , 'aka': ''
            , 'hazard': 'flammable; may be fatal if swallowed; causes skin and eye irritation'
        },

        'phenylboronic acid': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=AC130360100&productDescription=phenylboronic-acid--acros-organicstrade&vendorId=VN00032119&keyword=true&countryCode=US&language=en'
            , 'name': 'Phenylboronic acid'
            , 'aka': ''
            , 'hazard': 'harmful if swallowed'
        },

        'phosphomolybdic acid': {
            'link': 'https://www.fishersci.com/shop/msdsproxy?productName=AC317100500&productDescription=PHOSPHOMOLYBDIC+ACID+AMMO+50G&catNo=AC317100500&vendorId=VN00032119&storeId=10652'
            , 'name': 'Phosphomolybdic acid'
            , 'aka': ''
            , 'hazard': 'causes skin, eye, and respiratory irritation; toxic and corrosive; will stain skin (wear gloves); do not use outside of fumehood'
        },

        'potassium carbonate': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=BP365500&productDescription=potassium-carbonate-anhydrous-white-granular-powder-fisher-bioreagents&vendorId=VN00033897&keyword=true&countryCode=US&language=en'
            , 'name': 'Potassium carbonate'
            , 'aka': ''
            , 'hazard': 'causes skin, eye, and respiratory irritation '
        },

        'potassium chloride': {
            'link': 'http://www.sciencelab.com/msds.php?msdsId=9927402'
            , 'name': 'Potassium chloride'
            , 'aka': ''
            , 'hazard': ' Slightly hazardous in case of skin contact (irritant), of eye contact (irritant), of ingestion, of\n' +
            'inhalation.'
        },

        'potassium hexafluorophosphate': {
            'link': 'https://fscimage.fishersci.com/msds/56817.htm'
            , 'name': 'KPF6'
            , 'aka': ''
            , 'hazard': 'hazardous in case of skin/eye contact and inhalation or ingestion; avoid exposure to fine particles'
        },

        'potassium hydroxide': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=P2463&productDescription=potassium-hydroxide-flakestechnical-fisher-chemical&vendorId=VN00033897&keyword=true&countryCode=US&language=en'
            , 'name': 'Potassium hydroxide'
            , 'aka': ''
            , 'hazard': 'may be corrosive to metals; causes severe skin burns, eye damage, and respiratory irritation; harmful if swallowed'
        },

        'potassium iodide': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=AC193790500&productDescription=potassium-iodide--trace-metal-basis-extra-pure-acros-organicstrade&vendorId=VN00032119&keyword=true&countryCode=US&language=en'
            , 'name': 'Potassium iodide'
            , 'aka': ''
            , 'hazard': 'n/a'
        },

        'potassium oxalate': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=AC424025000&productDescription=potassium-oxalate-monohydrate-reagent-acs--acros-organicstrade&vendorId=VN00032119&keyword=true&countryCode=US&language=en'
            , 'name': 'Potassium oxalate monohydrate'
            , 'aka': ''
            , 'hazard': 'harmful if swallowed or in contact with skin'
        },

        'potassium sulfate': {
            'link': 'http://www.sciencelab.com/msds.php?msdsId=9927236'
            , 'name': 'Potassium sulfate'
            , 'aka': ''
            , 'hazard': 'Hazardous in case of skin contact (irritant), of eye contact (irritant), of ingestion, of inhalation. Slightly hazardous in case of\n' +
            'skin contact (permeator).'
        },

        'kbiph': {
            'link': 'http://www.sciencelab.com/msds.php?msdsId=9926672'
            , 'name': 'Potassium biphthalate'
            , 'aka': ''
            , 'hazard': ' is slightly hazardous  in case of skin contact (irritant), eye contact (irritant), ingestion and inhalation.'
        },

        'proline': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=BP392100&productDescription=lproline-white-crystals-or-crystalline-powder-fisher-bioreagents&vendorId=VN00033897&keyword=true&countryCode=US&language=en'
            , 'name': 'L-Proline methyl ester hydrochloride'
            , 'aka': ''
            , 'hazard': 'irritating to eyes and skin'
        },

        'propionic acid': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=A258500&productDescription=propionic-acid-certified-acs-fisher-chemical&vendorId=VN00033897&keyword=true&countryCode=US&language=en'
            , 'name': 'Propionic acid'
            , 'aka': 'Propanoic acid'
            , 'hazard': 'flammable; may be corrosive to metals; causes severe skin burns, eye damage, and respiratory irritation'
        },

        'pyridinecarboxaldehyde': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=AC131820250&productDescription=pyridinecarboxaldehyde--acros-organicstrade&vendorId=VN00032119&keyword=true&countryCode=US&language=en'
            , 'name': '2-Pyridinecarboxaldehyde'
            , 'aka': ''
            , 'hazard': 'combustible; harmful if swallowed; fatal if inhaled; causes skin and eye irritation'
        },

        'pyridinium tribromide': {
            'link': 'https://www.geneseo.edu/sites/default/files/users/247/Pyridinium%20tribromide.pdf'
            , 'name': 'Pyridinium tribromide'
            , 'aka': ''
            , 'hazard': 'causes severe skin burns and eye damage; very hazardous in case of inhalation or ingestion'
        },

        'pyrrole': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=AC157711000&productDescription=pyrrole--extra-pure-acros-organicstrade&vendorId=VN00032119&keyword=true&countryCode=US&language=en'
            , 'name': 'Pyrrole'
            , 'aka': ''
            , 'hazard': 'flammable; toxic if swallowed; harmful if inhaled; causes serious eye damage'
        },

        'salicylic acid': {
            'link': 'http://www.sciencelab.com/msds.php?msdsId=9927249',
            'name': 'salicylic acid',
            'aka': '',
            'hazard': 'Hazardous in case of skin contact (irritant), of eye contact (irritant), of ingestion, of inhalation (lung irritant). Slightly hazardous in case of skin contact (permeator). Severe over-exposure can result in death.'
        },
        'sodum acetate': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=AA1155430&productDescription=sodium-acetate-anhydrous-alfa-aesartrade&vendorId=VN00024248&keyword=true&countryCode=US&language=en'
            , 'name': 'Sodium acetate'
            , 'aka': ''
            , 'hazard': 'n/a'
        },

        'sodium ascorbate': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=AAA1775922&productDescription=lascorbic-acid-sodium-salt-&vendorId=VN00024248&keyword=true&countryCode=US&language=en'
            , 'name': 'Sodium ascorbate'
            , 'aka': ''
            , 'hazard': 'n/a'
        },

        'sodium azide': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=AC190380050&productDescription=sodium-azide--extra-pure-acros-organicstrade&vendorId=VN00032119&keyword=true&countryCode=US&language=en'
            , 'name': 'Sodium azide'
            , 'aka': ''
            , 'hazard': 'fatal if swallowed or in contact with skin'
        },

        'sodium borohydride': {
            'link': 'https://www.fishersci.com/shop/msdsproxy?productName=S67810'
            , 'name': 'Sodium borohydride'
            , 'aka': ''
            , 'hazard': 'hazardous in case of skin/eye contact or inhalation/ingestion; corrosive; may catch fire in water; DO NOT dispose of in sink'
        },

        'sodium carbonate': {
            'link': 'http://www.sciencelab.com/msds.php?msdsId=9927263'
            , 'name': 'Sodium carbonate'
            , 'aka': ''
            , 'hazard': ': Hazardous in case of skin contact (irritant), of eye contact (irritant), of ingestion, of inhalation\n' +
            '(lung irritant).\n'
        },

        'sodium chloride': {
            'link': 'http://www.sciencelab.com/msds.php?msdsId=9927593'
            , 'name': 'Sodium chloride'
            , 'aka': 'table salt'
            , 'hazard': ' Slightly hazardous in case of skin contact (irritant), of eye contact (irritant), of ingestion, of\n' +
            'inhalation.'
        },

        'sodium hydroxide': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=S39250&productDescription=sodium-hydroxide-granularnffccepbpjp-fisher-chemical&vendorId=VN00033897&keyword=true&countryCode=US&language=en'
            , 'name': 'Sodium hydroxide'
            , 'aka': ''
            , 'hazard': 'causes severe skin burns, eye damage, and respiratory irritation; corrosive'
        },

        'sodium hypochlorite': {
            'link': 'https://beta-static.fishersci.com/content/dam/fishersci/en_US/documents/programs/education/regulatory-documents/sds/chemicals/chemicals-s/S25552.pdf'
            , 'name': 'Sodium hypochlorite'
            , 'aka': 'Bleach'
            , 'hazard': 'corrosive; causes skin irritation and eye damage'
        },

        'sodium sulfate': {
            'link': 'http://www.sciencelab.com/msds.php?msdsId=9927278'
            , 'name': 'Sodium sulfate'
            , 'aka': ''
            , 'hazard': 'Hazardous in case of eye contact (irritant). Slightly hazardous in case of skin contact (irritant), of ingestion, of inhalation.'
        },

        'stilbene': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=AC161041000&productDescription=TRANS-STILBENE%2C+96%25+100GR&vendorId=VN00032119&countryCode=US&language=en'
            , 'name': 'Stilbene'
            , 'aka': ''
            , 'hazard': 'causes eye irritation; harmful if swallowed'
        },

        'sulfuric acid': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=A298212&productDescription=sulfuric-acid-technical-fisher-chemical&vendorId=VN00033897&keyword=true&countryCode=US&language=en'
            , 'name': 'Sulfuric acid'
            , 'aka': ''
            , 'hazard': 'causes severe skin burns, eye damage, and respiratory irritation; may be corrosive to metals'
        },

        'sucrose': {
            'link': 'http://www.sciencelab.com/msds.php?msdsId=9927285'
            , 'name': 'Sucrose'
            , 'aka': 'table sugar'
            , 'hazard': 'Slightly hazardous in case of skin contact (irritant), of eye contact (irritant), of ingestion, of\n' +
            'inhalation.\n'
        },

        'thionyl chloride': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=AA4186836&productDescription=thionyl-chloride--alfa-aesartrade&vendorId=VN00024248&keyword=true&countryCode=US&language=en'
            , 'name': 'Thionyl chloride'
            , 'aka': ''
            , 'hazard': 'reacts violently with water; causes severe skin burns and eye damage; harmful if swallowed or inhaled'
        },

        'titanium dioxide': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=AC277370100&productDescription=titaniumiv-oxide--tio-acros-organicstrade&vendorId=VN00032119&keyword=true&countryCode=US&language=en'
            , 'name': 'Titanium dioxide'
            , 'aka': ''
            , 'hazard': 'suspected carcinogen'
        },

        'toluenesulfonamide': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=AC147690010&productDescription=ptoluenesulfonamide--acros-organicstrade&vendorId=VN00032119&keyword=true&countryCode=US&language=en'
            , 'name': 'p-Toluenesulfonamide'
            , 'aka': ''
            , 'hazard': 'causes skin, eye, and respiratory irritation '
        },

        'triphenylphosphine': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=AA1411214&productDescription=triphenylphosphine--alfa-aesartrade&vendorId=VN00024248&keyword=true&countryCode=US&language=en'
            , 'name': 'Triphenylphosphine'
            , 'aka': ''
            , 'hazard': 'harmful if swallowed; may cause an allergic skin reaction; may damage the CNS through prolonged exposure'
        },

        'unknown': {
            'link': 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            , 'name': 'Unknown'
            , 'aka': ''
            , 'hazard': ' is  slightly  hazardous  in  case  of  skin  contact (irritant), eye contact (irritant) and inhalation or ingestion.'
        },

        'unknown_acetophenones': {
            'link': 'https://www.youtube.com/watch?v=32FB-gYr49Y'
            , 'name': 'Unknown acetophenones'
            , 'aka': ''
            , 'hazard': 'hazardous in case of skin/eye contact or ingestion/inhalation'
        },

        'unknown_benzaldehydes': {
            'link': 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            , 'name': 'Unknown benzaldehydes'
            , 'aka': ''
            , 'hazard': 'hazardous in case of skin/eye contact or ingestion/inhalation'
        },

        'unknown_aldol': {
            'link': 'https://www.youtube.com/watch?v=QH2-TGUlwu4'
            , 'name': 'Unknown aldol products'
            , 'aka': ''
            , 'hazard': 'hazardous in case of skin/eye contact or ingestion/inhalation'
        },

        'vanillin': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=AC140820020&productDescription=VANILLIN+99%25+2G&vendorId=VN00032119&countryCode=US&language=en'
            , 'name': 'Vanillin'
            , 'aka': ''
            , 'hazard': 'slightly hazardous in case of skin contact (irritant)'
        },

        'ylide': {
            'link': 'https://www.fishersci.com/store/msds?partNumber=AC108290250&productDescription=%28CARBETHOXYMETHYLENE%29-TR+25GR&vendorId=VN00032119&countryCode=US&language=en'
            , 'name': 'Ylide'
            , 'aka': '(Carboxymethylene)triphenylphosphorane'
            , 'hazard': 'slightly hazardous in case of skin/eye contact or inhalation/ingestion (irritant)'
        },

        'template_entry': {
            'link': ''
            , 'name': ''
            , 'aka': ''
            , 'hazard': ''
        }

    };
    safety = document.getElementById("safety");
    safety.classList.add('notice');
    safety.classList.add('critical');
    var title = document.createElement('strong');
    title.appendChild(document.createTextNode('Chemical Safety'));
    var title_strong = document.createElement('p').appendChild(title);
    safety.appendChild(title_strong);
    var list = document.createElement('ul');

    for (i = 0; i < chemicals.length; i++) {
        var chemical = document.createElement('li');

        var link = document.createElement('a');
        link.setAttribute('href', safety_statements[chemicals[i]]['link']);
        link.setAttribute('target', "_blank")
        link.appendChild(document.createTextNode(safety_statements[chemicals[i]]['name']));

        chemical.appendChild(link);

        if (safety_statements[chemicals[i]]['aka']!='') {

            chemical.appendChild(document.createTextNode(' ('));
            chemical.appendChild(document.createTextNode(safety_statements[chemicals[i]]['aka']));
            chemical.appendChild(document.createTextNode(')'))}

        chemical.appendChild(document.createTextNode(': '));

        chemical.appendChild(document.createTextNode(safety_statements[chemicals[i]]['hazard']));

        list.appendChild(chemical);
    }
    safety.appendChild(list);
}

/*
<div id='safety'>
        <script>
            safety(['KSCN', 'ironnitrate', 'nitricacid', 'ethanol'])
        </script>
    </div>
*/

<!-- Bibilography -->

function bibentry(entry){

    var result =
        {

            "aktoudianakis_2008": {
                "title": "'Greening Up' the Suzuki Reaction",
                "volume": "85",
                "doi": "10.1021/ed085p555",
                "pages": "555",
                "number": "4",
                "journaltitle": "Journal of Chemical Education",
                "shortjournal": "J. Chem. Ed.",
                "author": "Aktoudianakis, E.; Chan, E.; Edward, A. R.; Jarosz, I.; Lee, V.; Mui, L.; Thatipamala, S. S.; Dicks, A. P.",
                "date": "2008",
                "ENTRYTYPE": "article",
                "ID": "aktoudianakis_2008"
            },

            "allemann_2004":
                {"title": "Theory of Asymmetric Organocatalysis of Aldol and Related Reactions: Rationalizations and Predictions",
                    "volume": "37",
                    "doi": "10.1021/ar0300524",
                    "pages": "558-569",
                    "number": "8",
                    "journaltitle": "Accounts of Chemical Research",
                    "shortjournal": "Acc. Chem. Res.",
                    "author": "Allemann, C.; Gordillo, R.; Clemente, F. R.; Cheong, P. H.; Houk, K. N.",
                    "date": "2004-08-01",
                    "ENTRYTYPE": "article",
                    "ID": "allemann_2004"
                },

            "amarnath_1995": {
                "title": "Intermediates in the Paal-Knorr Synthesis of Furans",
                "volume": "60",
                "doi": "10.1021/jo00107a006",
                "pages": "301-307",
                "number": "2",
                "journaltitle": "Journal of Organic Chemistry",
                "shortjournal": "J. Org. Chem.",
                "author": "Amarnath, V.; Amarnath, K.",
                "date": "1995",
                "ENTRYTYPE": "article",
                "ID": "amarnath_1995"
            },

            "amarnath_1991": {
                "title": "Intermediates in the Paal-Knorr Synthesis of Pyrroles",
                "volume": "56",
                "doi": "10.1021/jo00024a040",
                "pages": "6924-6931",
                "number": "24",
                "journaltitle": "Journal of Organic Chemistry",
                "shortjournal": "J. Org. Chem.",
                "author": "Amarnath, V.; Anthony, D. C.; Amarnath, K.; Valentine, W. M.; Wetterau, L. A.; Graham, D. G.",
                "date": "1991",
                "ENTRYTYPE": "article",
                "ID": "amarnath_1991"
            },

            "anastas_1998":
                {"title": "Green Chemistry: Theory and Practice",
                    "pagetotal": "152",
                    "publisher": "Oxford University Press",
                    "city": "New York",
                    "author": "Anastas, P. T.; Warner, J. C.",
                    "date": "1998",
                    "ENTRYTYPE": "book",
                    "ID": "anastas_1998"
                },

            "balema_2002":
                {"title": "Mechanically Induced Solid-State Generation of Phosphorus Ylides and the Solvent-Free Wittig Reaction",
                    "volume": "124",
                    "doi": "10.1021/ja017908p",
                    "pages": "6244-6245",
                    "number": "22",
                    "journaltitle": "Journal of the American Chemical Society",
                    "shortjournal": "J. Am. Chem. Soc.",
                    "author": "Balema, V. P.; Wiench, J. W.; Pruski, M.; Pecharsky, V. K.",
                    "date": "2002-05-10",
                    "langid": "english",
                    "ENTRYTYPE": "article",
                    "ID": "balema_2002"
                },

            "ballhausen_1962":
                {"title": "Introduction to Ligand Field Theory",
                    "pagetotal": "298",
                    "publisher": "McGraw-Hill",
                    "city": "New York",
                    "author": "Ballhausen, C. J.",
                    "date": "1962",
                    "ENTRYTYPE": "book",
                    "ID": "ballhausen_1962"
                },

            "barsan_2011":
                {"title": "High\u2010pressure studies of the micro\u2010Raman spectra of iron cyanide complexes: Prussian blue (Fe4[Fe({CN})6]3), potassium ferricyanide (K3[Fe({CN})6]), and sodium nitroprusside (Na2[Fe({CN})5({NO})]\u00b72H2O)",
                    "volume": "42",
                    "doi": "10.1002/jrs.2931",
                    "pages": "1820-1824",
                    "number": "9",
                    "journaltitle": "Journal of Raman Spectroscopy",
                    "shortjournal": "j. Raman Spectrosc.",
                    "author": "Barsan, M. M.; Butler, I. S.; Fitzpatrick, J.; Gilson, D. F. R.",
                    "date": "2011-09-01",
                    "langid": "english",
                    "ENTRYTYPE": "article",
                    "ID": "barsan_2011"
                },

            "biginelli_1891": {
                "title": "Ueber Aldehyduramide des Acetessig\u00e4thers",
                "volume": "24",
                "doi": "10.1002/cber.189102401228",
                "pages": "1317-1319",
                "number": "1",
                "journaltitle": "Berichte der deutschen chemischen Gesellschaft",
                "shortjournal": "Ber. Dtsch. Chem. Ges.",
                "author": "Biginelli, P.",
                "date": "1891-01-01",
                "ENTRYTYPE": "article",
                "ID": "biginelli_1891"
            },

            "borchardt-ott_2012":
                {"title": "Crystallography: An Introduction",
                    "pagetotal": "355",
                    "edition": "3rd ed.",
                    "publisher": "Springer-Verlag",
                    "city": "Berlin; Heidelberg",
                    "author": "Borchardt-Ott, W.",
                    "date": "2012",
                    "langid": "english",
                    "ENTRYTYPE": "book",
                    "ID": "borchardt-ott_2011"
                },

            "bose_2005": {
                "title": "New protocol for Biginelli reaction-a practical synthesis of Monastrol",
                "volume": "228",
                "pages": "236",
                "journaltitle": "Arkivoc",
                "author": "Bose, D. S.; Sudharshan, M.; Chavhan, S. W.",
                "date": "2005",
                "ENTRYTYPE": "article",
                "ID": "bose_2005"
            },

            "butler_1985":
                {"title": "Chemistry and artists' pigments",
                    "volume": "62",
                    "doi": "10.1021/ed062p334",
                    "pages": "334",
                    "number": "4",
                    "journaltitle": "Journal of Chemical Education",
                    "shortjournal": "J. Chem. Educ.",
                    "author": "Butler, I. S.; Furbacher, R. J.",
                    "date": "1985-04-01",
                    "ENTRYTYPE": "article",
                    "ID": "butler_1985"
                },

            "corbeil_2007": {
                "title": "Docking Ligands into Flexible and Solvated Macromolecules. 1. Development and Validation of {FITTED} 1.0",
                "volume": "47",
                "doi": "10.1021/ci6002637",
                "pages": "435-449",
                "number": "2",
                "journaltitle": "Journal of Chemical Information and Modeling",
                "shortjournal": "J. Chem. Inf. Model.",
                "author": "Corbeil, C. R.; Englebienne, P.; Moitessier, N.",
                "date": "2007-03-01",
                "ENTRYTYPE": "article",
                "ID": "corbeil_2007"
            },

            "cotton_1999":
                {"title": "Advanced Inorganic Chemistry",
                    "pagetotal": "1355",
                    "edition": "6th ed.",
                    "publisher": "Wiley",
                    "city": "New York",
                    "author": "Cotton, F. A.; Wilkinson, G.; Murillo, C. A.; Bochmann, M.",
                    "date": "1999-04-13",
                    "langid": "english",
                    "ENTRYTYPE": "book",
                    "ID": "cotton_1999"
                },

            "dodd_2017": {
                "author": "Dodd, E. L.; Tazoo, D.; Bohle, D. S.",
                "title": "Solution and Solid State Correlations of Antimalarial Drug Actions: NMR and Crystallographic Studies of Drug Interactions with a Heme Model",
                "journaltitle": "Inorganic Chemistry",
                "shortjournal": "Inorg. Chem.",
                "volume": "56",
                "number": "14",
                "pages": "7803-7810",
                "date": "2017",
                "doi": "10.1021/acs.inorgchem.7b00526",
                "ENTRYTYPE": "article",
                "ID": "dodd_2017"
            },

            "eder_1971":
                {"title": "New Type of Asymmetric Cyclization to Optically Active Steroid {CD} Partial Structures",
                    "volume": "10",
                    "doi": "10.1002/anie.197104961",
                    "pages": "496-497",
                    "number": "7",
                    "journaltitle": "Angewandte Chemie International Edition in English",
                    "shortjournal": "Angew. Chem. Int. Ed. Engl.",
                    "author": "Eder, U.; Sauer, G.; Wiechert, R.",
                    "date": "1971-07-01",
                    "langid": "english",
                    "ENTRYTYPE": "article",
                    "ID": "eder_1971"
                },

            "figgis_1966":
                {"title": "Introduction to ligand fields",
                    "pagetotal": "351",
                    "publisher": "Interscience Publishers",
                    "city": "New York",
                    "author": "Figgis, B. N.",
                    "date": "1966",
                    "langid": "english",
                    "ENTRYTYPE": "book",
                    "ID": "figgis_1966"
                },

            "figgis_2000": {
                "title": "Ligand field theory and its applications",
                "pagetotal": "354",
                "publisher": "Wiley-VCH",
                "city": "New York",
                "author": "Figgis, B. N.; Hitchman, M. A.",
                "date": "2000",
                "langid": "english",
                "ENTRYTYPE": "book",
                "ID": "figgis_2000"
            },

            "franzen_2005": {
                "title": "Review on green chemistry Suzuki cross coupling in aqueous media",
                "volume": "83",
                "pages": "266-272",
                "number": "3",
                "journaltitle": "Canadian Journal of Chemistry",
                "author": "Franz\u00e9n, R.; Xu, Y.",
                "date": "2005",
                "ENTRYTYPE": "article",
                "ID": "franzen_2005"
            },

            "gartner_2005": {
                "title": "Development and biological evaluation of potent and specific inhibitors of mitotic Kinesin Eg5",
                "volume": "6",
                "doi": "10.1002/cbic.200500005",
                "pages": "1173-1177",
                "number": "7",
                "journaltitle": "ChemBioChem: A European Journal of Chemical Biology",
                "shortjournal": "ChemBioChem",
                "author": "Gartner, M.; Sunder-Plassmann, N.; Seiler, J.; Utz, M.; Vernos, I.; Surrey, T.; Giannis, A.",
                "date": "2005-07",
                "ENTRYTYPE": "article",
                "ID": "gartner_2005"
            },

            "gianferrara_2010": {
                "title": "Ruthenium\u2212Porphyrin Conjugates with Cytotoxic and Phototoxic Antitumor Activity",
                "volume": "53",
                "doi": "10.1021/jm1002588",
                "pages": "4678-4690",
                "number": "12",
                "journaltitle": "Journal of Medicinal Chemistry",
                "shortjournal": "J. Med. Chem.",
                "author": "Gianferrara, T.; Bergamo, A.; Bratsos, I.; Milani, B.; Spagnul, C.; Sava, G.; Alessio, E.",
                "date": "2010-06-24",
                "ENTRYTYPE": "article",
                "ID": "gianferrara_2010"
            },

            "gratzel_2003": {
                "title": "Dye-sensitized solar cells",
                "volume": "4",
                "doi": "10.1016/S1389-5567(03)00026-1",
                "pages": "145-153",
                "number": "2",
                "journaltitle": "Journal of Photochemistry and Photobiology C: Photochemistry Reviews",
                "shortjournal": "Journal of Photochemistry and Photobiology C: Photochemistry Reviews",
                "author": "Gr\u00e4tzel, M.",
                "date": "2003-10-31",
                "ENTRYTYPE": "article",
                "ID": "gratzel_2003"
            },

            "grossman_1995": {
                "title": "Light-harvesting complexes in oxygenic photosynthesis: diversity, control, and evolution",
                "volume": "29",
                "doi": "10.1146/annurev.ge.29.120195.001311",
                "pages": "231-288",
                "journaltitle": "Annual Review of Genetics",
                "shortjournal": "Annu. Rev. Genet.",
                "author": "Grossman, A. R.; Bhaya, D.; Apt, K. E.; Kehoe, D. M.",
                "date": "1995",
                "ENTRYTYPE": "article",
                "ID": "grossman_1995"
            },

            "hajos_1974": {
                "title": "Asymmetric synthesis of bicyclic intermediates of natural product chemistry",
                "volume": "39",
                "doi": "10.1021/jo00925a003",
                "pages": "1615-1621",
                "number": "12",
                "journaltitle": "The Journal of Organic Chemistry",
                "shortjournal": "J. Org. Chem.",
                "author": "Hajos, Z. G.; Parrish, D. R.",
                "date": "1974-06-01",
                "ENTRYTYPE": "article",
                "ID": "hajos_1974"
            },

            "hansen_2005": {
                "title": "Just Click It: Undergraduate Procedures for the Copper(I)-Catalyzed Formation of 1,2,3-Triazoles from Azides and Terminal Acetylenes",
                "volume": "82",
                "doi": "10.1021/ed082p1833",
                "pages": "1833",
                "number": "12",
                "journaltitle": "Journal of Chemical Education",
                "shortjournal": "J. Chem. Educ.",
                "author": "Hansen, T. V.; Wu, P.; Sharpless, W. D.; Lindberg, J. G.",
                "date": "2005-12-01",
                "ENTRYTYPE": "article",
                "ID": "hansen_2005"
            },
            "hohn_1993": {
                            "title": "A Simple Determination of the Greenhouse Effect",
                            "volume": "70",
                            "doi": "10.1021/ed070p73",
                            "pages": "73",
                            "number": "1",
                            "journaltitle": "Journal of Chemical Education",
                            "shortjournal": "J. Chem. Educ.",
                            "author": "Adelhelm, M.; Ernst-Gerhard Hohn.",
                            "date": "1993",
                            "ENTRYTYPE": "article",
                            "ID": "hohn_1993"
                        },
            "holden_2001": {
                "title": "The Biginelli Reaction",
                "volume": "78",
                "doi": "10.1021/ed078p1104",
                "pages": "1104",
                "number": "8",
                "journaltitle": "Journal of Chemical Education",
                "shortjournal": "J. Chem. Educ.",
                "author": "Holden, M. S.; Crouch, R. D.",
                "date": "2001-08-01",
                "ENTRYTYPE": "article",
                "ID": "holden_2001"
            },

            "houk_2004": {
                "title": "Asymmetric Organocatalysis",
                "volume": "37",
                "doi": "10.1021/ar040216w",
                "pages": "487-487",
                "number": "8",
                "journaltitle": "Accounts of Chemical Research",
                "shortjournal": "Acc. Chem. Res.",
                "author": "Houk, K. N.; List, B.",
                "date": "2004-08-01",
                "ENTRYTYPE": "article",
                "ID": "houk_2004"
            },

            "huszar_2009": {
                "title": "Kinesin motor proteins as targets for cancer therapy",
                "volume": "28",
                "doi": "10.1007/s10555-009-9185-8",
                "pages": "197-208",
                "number": "1",
                "journaltitle": "Cancer Metastasis Reviews",
                "shortjournal": "Cancer Metastasis Rev.",
                "author": "Huszar, D.; Theoclitou, M.-E.; Skolnik, J.; Herbst, R.",
                "date": "2009-06",
                "ENTRYTYPE": "article",
                "ID": "huszar_2009"
            },

            "jordao_2015": {
                "title": "Lawsone in organic synthesis",
                "volume": "5",
                "doi": "10.1039/c5ra12785h",
                "pages": "67909-67943",
                "number": "",
                "journaltitle": "RSC Advances",
                "shortjournal": "RSC Adv.",
                "author": "Jord\u00e3o, A. K.; Vargas, M. D.; Pinto, A. C.; da Silva, F. C.; Ferreira, V. F.",
                "date": "2015",
                "ENTRYTYPE": "article",
                "ID": "jordao_2010"
            },

            "kaan_2010": {
                "title": "Structural basis for inhibition of Eg5 by dihydropyrimidines: stereoselectivity of antimitotic inhibitors enastron, dimethylenastron and fluorastrol",
                "volume": "53",
                "doi": "10.1021/jm100421n",
                "pages": "5676-5683",
                "number": "15",
                "journaltitle": "Journal of Medicinal Chemistry",
                "shortjournal": "J. Med. Chem.",
                "author": "Kaan, H. Y. K.; Ulaganathan, V.; Rath, O.; Prokopcov\u00e1, H.; Dallinger, D.; Kappe, C. O.; Kozielski, F.",
                "date": "2010-08-12",
                "ENTRYTYPE": "article",
                "ID": "kaan_2010"
            },

            "kappe_2000": {
                "title": "Recent Advances in the Biginelli Dihydropyrimidine Synthesis. New Tricks from an Old Dog",
                "volume": "33",
                "doi": "10.1021/ar000048h",
                "pages": "879-888",
                "number": "12",
                "journaltitle": "Accounts of Chemical Research",
                "shortjournal": "Acc. Chem. Res.",
                "author": "Kappe, C. O.",
                "date": "2000",
                "ENTRYTYPE": "article",
                "ID": "kappe_2000"
            },

            "kettle_1969": {
                "title": "Coordination compounds",
                "pagetotal": "220",
                "publisher": "Nelson",
                "city": "London",
                "author": "Kettle, S. F. A",
                "date": "1969",
                "ENTRYTYPE": "book",
                "ID": "kettle_1969"
            },

            "knorr_1884": {
                "title": "Syntheses von Furfuranderivaten aus dem Diacetbernsteins\xE4ureester",
                "volume": "17",
                "doi": "10.1002/cber.188401702254",
                "pages": "2863-2870",
                "number": "2",
                "journaltitle": "Berichte der deutschen chemischen Gesellschaft",
                "shortjournal": "Ber. Dtsch. Chem. Ges.",
                "author": "Knorr, L.",
                "date": "1884",
                "ENTRYTYPE": "article",
                "ID": "knorr_1884"
            },

            "kolb_2001": {
                "title": "Click Chemistry: Diverse Chemical Function from a Few Good Reactions",
                "volume": "40",
                "doi": "10.1002/1521-3773(20010601)40:11<2004::AID-ANIE2004>3.0.CO;2-5",
                "pages": "2004-2021",
                "number": "11",
                "journaltitle": "Angewandte Chemie International Edition",
                "author": "Kolb, H. C.; Finn, M. G.; Sharpless, K. B.",
                "date": "2001-06-01",
                "ENTRYTYPE": "article",
                "ID": "kolb_2001"
            },

            "kurti_2005": {
                "title": "Strategic Applications of Named Reactions in Organic Synthesis",
                "pagetotal": "864",
                "publisher": "Academic Press",
                "city": "Burlington, MA",
                "author": "K\xFCrti, L.; Czak\xF3, B.",
                "date": "2005",
                "ENTRYTYPE": "book",
                "ID": "kurti_2005"
            },

            "lelais_2006": {
                "title": "Modern strategies in organic catalysis: The advent and development of iminium activation",
                "volume": "39",
                "pages": "79-87",
                "number": "3",
                "journaltitle": "Aldrichimica Acta",
                "author": "Lelais, G.; MacMillan, D.",
                "date": "2006",
                "ENTRYTYPE": "article",
                "ID": "lelais_2006"
            },

            "lin_2006": {
                "title": "Site-Specific Protein Modification through {CuI}-Catalyzed 1,2,3-Triazole Formation and Its Implementation in Protein Microarray Fabrication",
                "volume": "45",
                "doi": "10.1002/anie.200600756",
                "pages": "4286-4290",
                "number": "26",
                "journaltitle": "Angewandte Chemie International Edition",
                "shortjournal": "Angew. Chem. Intl. Ed.",
                "author": "Lin, P.-C.; Ueng, S.-H.; Tseng, M.-C.; Ko, J.-L.; Huang, K.-T.; Yu, S.-C.; Adak, A. K. Chen, Y.-J.; Lin, C.-C.",
                "date": "2006-06-26",
                "ENTRYTYPE": "article",
                "ID": "lin_2006"
            },

            "link_2003": {
                "title": "Cell Surface Labeling of Escherichia coli via Copper(I)-Catalyzed [3+2] Cycloaddition",
                "volume": "125",
                "doi": "10.1021/ja036765z",
                "pages": "11164-11165",
                "number": "37",
                "journaltitle": "Journal of the American Chemical Society",
                "shortjournal": "J. Am. Chem. Soc.",
                "author": "Link, A. J.; Tirrell, D. A.",
                "date": "2003-09-01",
                "ENTRYTYPE": "article",
                "ID": "link_cell_2003"
            },

            "list_2004":
                {"title": "Enamine Catalysis Is a Powerful Strategy for the Catalytic Generation and Use of Carbanion Equivalents",
                    "volume": "37",
                    "issn": "0001-4842",
                    "link": "http://dx.doi.org/10.1021/ar0300571",
                    "doi": "10.1021/ar0300571",
                    "pages": "548-557",
                    "number": "8",
                    "journaltitle": "Accounts of Chemical Research",
                    "shortjournal": "Acc. Chem. Res.",
                    "author": "List, B.",
                    "urldate": "2016-10-12",
                    "date": "2004-08-01",
                    "ENTRYTYPE": "article",
                    "ID": "list_2004"
                },

            "mal_2011": {
                "author": "Mal, D.; Shome, B.; Dinda, B. K.",
                "title": "Heterocycles in Natural Product Synthesis",
                "chaptertitle": "Pyrrole and Its Derivatives",
                "date": "2011",
                "editor": "Majumdar, K. C.; Chattopadhyay, S. K.",
                "publisher": "Wiley-VCH",
                "city": "Weinheim, Germany",
                "page": "187-220",
                "doi": "10.1002/9783527634880.ch6",
                "ENTRYTYPE": "chapter",
                "ID": "mal_2011"
            },

            "mayer_1999": {
                "title": "Small molecule inhibitor of mitotic spindle bipolarity identified in a phenotype-based screen",
                "volume": "286",
                "pages": "971-974",
                "number": "5441",
                "journaltitle": "Science",
                "shortjournal": "Science",
                "author": "Mayer, T. U.; Kapoor, T. M.; Haggarty, S. J.; King, R. W.; Schreiber, S. L.; Mitchison, T. J.",
                "date": "1999-10-29",
                "ENTRYTYPE": "article",
                "ID": "mayer_1999"
            },

            "mccurdy_2005": {
                "title": "Analgesic substances derived from natural products (natureceuticals)",
                "volume": "78",
                "doi": "10.1016/j.lfs.2005.09.006",
                "pages": "476-484",
                "number": "5",
                "journaltitle": "Life Sciences",
                "shortjournal": "Life Sci.",
                "author": "McCurdy, C. R.; Scully, S. S.",
                "date": "2005-12-22",
                "ENTRYTYPE": "article",
                "ID": "mccurdy_2005"
            },

            "minetto_2004": {
                "title": "Microwave-Assisted Paal-Knorr Reaction: A Rapid Approach to Substituted Pyrroles and Furans",
                "volume": "6",
                "doi": "10.1021/ol0362820",
                "pages": "389-392",
                "number": "3",
                "journaltitle": "Organic Letters",
                "shortjournal": "Org. Lett.",
                "author": "Minetto, G.; Raveglia, L. F.; Taddei, M.",
                "date": "2004-01-03",
                "ENTRYTYPE": "article",
                "ID": "minetto_2004"
            },

            "miyaura_1995": {
                "title": "Palladium-Catalyzed Cross-Coupling Reactions of Organoboron Compounds",
                "volume": "95",
                "doi": "10.1021/cr00039a007",
                "pages": "2457-2483",
                "number": "7",
                "journaltitle": "Chemical Reviews",
                "shortjournal": "Chem. Rev.",
                "author": "Miyaura, N.; Suzuki, A.",
                "date": "1995-11-01",
                "ENTRYTYPE": "article",
                "ID": "miyaura_1995"
            },

            "moitessier_2008": {
                "title": "Towards the development of universal, fast and highly accurate docking/scoring methods: a long way to go",
                "volume": "153 Suppl 1",
                "doi": "10.1038/sj.bjp.0707515",
                "pages": "S7-26",
                "journaltitle": "British Journal of Pharmacology",
                "shortjournal": "Br. J. Pharmacol.",
                "author": "Moitessier, N.; Englebienne, P.; Lee, D.; Lawandi, J.; Corbeil, C. R.",
                "date": "2008-03",
                "ENTRYTYPE": "article",
                "ID": "moitessier_2008"
            },

            "molander_2004": {
                "title": "Formal Total Synthesis of Oximidine {II} via a Suzuki-Type Cross-Coupling Macrocyclization Employing Potassium Organotrifluoroborates",
                "volume": "126",
                "doi": "10.1021/ja047190o",
                "pages": "10313-10318",
                "number": "33",
                "journaltitle": "Journal of the American Chemical Society",
                "shortjournal": "J. Am. Chem. Soc.",
                "author": "Molander, G. A.; Dehmel, F.",
                "date": "2004-08-01",
                "ENTRYTYPE": "article",
                "ID": "molander_2004"
            },

            "notz_2004": {
                "title": "Enamine-Based Organocatalysis with Proline and Diamines:\u2009 The Development of Direct Catalytic Asymmetric Aldol, Mannich, Michael, and Diels\u2212Alder Reactions",
                "volume": "37",
                "doi": "10.1021/ar0300468",
                "pages": "580-591",
                "number": "8",
                "journaltitle": "Accounts of Chemical Research",
                "shortjournal": "Acc. Chem. Res.",
                "author": "Notz, W.; Tanaka, F.; Barbas, C. F.",
                "date": "2004-08-01",
                "ENTRYTYPE": "article",
                "ID": "notz_2004"
            },

            "nudelman_1998": {
                "title": "Acetyl Chloride-Methanol as a Convenient Reagent for: A) Quantitative Formation of Amine Hydrochlorides B) Carboxylate Ester Formation C) Mild Removal of N-t-Boc-Protective Group",
                "volume": "28",
                "doi": "10.1080/00397919808005101",
                "pages": "471-474",
                "number": "3",
                "journaltitle": "Synthetic Communications",
                "author": "Nudelman, A.; Bechor, Y.; Falb, E.; Fischer, B.; Wexler, B. A.; Nudelman, A.",
                "date": "1998-02-01",
                "ENTRYTYPE": "article",
                "ID": "nudelman_1998"
            },

            "paal_1884": {
                "title": "Ueber die Derivate des Acetophenonacetessigesters und des Acetonylacetessigesters",
                "volume": "17",
                "doi": "10.1002/cber.188401702228",
                "pages": "2756-2767",
                "number": "2",
                "journaltitle": "Berichte der deutschen chemischen Gesellschaft",
                "shortjournal": "Ber. Dtsch. Chem. Ges.",
                "author": "Paal, C.",
                "date": "1884",
                "ENTRYTYPE": "article",
                "ID": "paal_1884"
            },

            "pleus_1997": {
                "title": "Design of Chiral Poly(Pyrroles)",
                "volume": "27",
                "doi": "10.1080/00397919708004998",
                "pages": "2917-2930",
                "number": "17",
                "journaltitle": "Synthetic Communications",
                "author": "Pleus, S.; Schwientek, M.",
                "date": "1997-09-01",
                "ENTRYTYPE": "article",
                "ID": "pleus_1997"
            },

            "pradhan_2012": {
                "title": "From Body Art to Anticancer Activities: Prespectives on Medicinal Properties of Henna",
                "volume": "13",
                "doi": "10.2174/138945012804545588",
                "pages": "1777-1798",
                "number": "14",
                "journaltitle": "Current Drug Targets",
                "author": "Pradhan, R.; Dandawate, P.; Vyas, A.; Padhye, S.; Biersack, B.; Schobert, R.; Ahmad, A.; Sarkar, F. H.",
                "date": "2012",
                "ENTRYTYPE": "article",
                "ID": "pradhan_2012"
            },

            "reist_1970": {
                "title": "Synthesis of D-dihydrosphingosine",
                "volume": "35",
                "doi": "10.1021/jo00835a073",
                "pages": "3521-3524",
                "number": "10",
                "journaltitle": "Journal of Organic Chemistry",
                "shortjournal": "J. Org. Chem.",
                "author": "Reist, E. J.; Christie, P. H.",
                "date": "1970-10",
                "ENTRYTYPE": "article",
                "ID": "reist_1970"
            },
            "renyk_1982": {
                            "title": "Isolation, separatuib and identification of synthetic food colors",
                            "volume": "59",
                            "doi": "10.1021/ed059p67",
                            "pages": "67",
                            "number": "1",
                            "journaltitle": "Journal of Chemical Education",
                            "shortjournal": "J. Chem. Educ.",
                            "author": "Dixon, E. A.; Renyk, G.",
                            "date": "1982",
                            "ENTRYTYPE": "article",
                            "ID": "renyk_1982"
                        },
            "rostovtsev_2002": {
                "title": "A Stepwise Huisgen Cycloaddition Process: Copper(I)-Catalyzed Regioselective \u201cLigation\u201d of Azides and Terminal Alkynes",
                "volume": "114",
                "doi": "10.1002/1521-3757(20020715)114:14<2708::AID-ANGE2708>3.0.CO;2-0",
                "pages": "2708-2711",
                "number": "14",
                "journaltitle": "Angewandte Chemie",
                "shortjournal": "Angewandte Chemie",
                "author": "Rostovtsev, V. V.; Green, L. G.; Fokin, V. V.; Sharpless, K. B.",
                "date": "2002-07-15",
                "ENTRYTYPE": "article",
                "ID": "rostovtsev_2002"
            },

            "rowinsky_1993": {
                "title": "Neurotoxicity of Taxol",
                "volume": "15",
                "pages": "107-115",
                "number": "15",
                "journaltitle": "Journal of the National Cancer Institute Monographs",
                "shortjournal": "J. Natl. Cancer Inst. Monographs",
                "author": "Rowinsky, E. K.; Chaudhry, V.; Cornblath, D. R.; Donehower, R. C.",
                "date": "1993",
                "ENTRYTYPE": "article",
                "ID": "rowinsky_1993"
            },
            "schamper_1993": {
                            "title": "Chemical aspects of antiperspirants and deodorants",
                            "volume": "70",
                            "doi": "10.1021/ed070p242",
                            "pages": "242",
                            "number": "3",
                            "journaltitle": "Journal of Chemical Education",
                            "shortjournal": "J. Chem. Educ.",
                            "author": "Schamper, T.",
                            "date": "1993",
                            "ENTRYTYPE": "article",
                            "ID": "schamper_1993"
                        },
            "smestad_1998":{
                "title": "Demonstrating Electron Transfer and Nanotechnology: A Natural Dye-Sensitized Nanocrystalline Energy Converter",
                "volume": "75",
                "doi": "10.1021/ed075p752",
                "pages": "752",
                "number": "6",
                "journaltitle": "Journal of Chemical Education",
                "shortjournal": "J. Chem. Educ.",
                "author": "Smestad, G. P.; Gr\u00e4tzel, M.",
                "urldate": "2016-10-17",
                "date": "1998-06-01",
                "ENTRYTYPE": "article",
                "ID": "smestad_1998"
            },
                        "smith_2011": {
                                        "title": "How Much Cranberry Juice is in Cranberry-Apple Juice? A General Chemistry Spectrophotometric Experiment",
                                        "volume": "88",
                                        "doi": "10.1021/ed2002237",
                                        "pages": "1410-1412",
                                        "number": "10",
                                        "journaltitle": "Journal of Chemical Education",
                                        "shortjournal": "J. Chem. Educ.",
                                        "author": "Villarreal, J. R.; Edionwe, E.; Smith, K. C.",
                                        "date": "2011",
                                        "ENTRYTYPE": "article",
                                        "ID": "smith_2011"
                                    },
            "Steffel_1990": {
                            "title": "Reduction of permanganate: A kinetics demonstration for general chemistry",
                            "volume": "67",
                            "doi": "10.1021/ed067p598.3",
                            "pages": "598",
                            "number": "7",
                            "journaltitle": "Journal of Chemical Education",
                            "shortjournal": "J. Chem. Educ.",
                            "author": "Steffel, M. J.",
                            "date": "1990",
                            "ENTRYTYPE": "article",
                            "ID": "steffel_1990"
                        },
            
            "stolle_2011":{
                "title": "Ball Milling in Organic Synthesis: Solutions and Challenges",
                "volume": "40",
                "doi": "10.1039/C0CS00195C",
                "pages": "2317-2329",
                "number": "",
                "journaltitle": "Chemical Society Reviews",
                "shortjournal": "Chem. Soc. Rev.",
                "author": "Stolle, A.; Szuppa, T.; Leonhardt, S. E. S.; Ondruschka, B.",
                "date": "2011-11-29",
                "ENTRYTYPE": "article",
                "ID": "stolle_2011"
            },

            "stolle_2015":
                {"title": "Ball Milling Towards Green Synthesis",
                    "pagetotal": "742",
                    "publisher": "Royal Society of Chemistry",
                    "city": "Cambridge",
                    "author": "Stolle, A.; Ranu, B.",
                    "date": "2015",
                    "ENTRYTYPE": "book",
                    "ID": "stolle_2015"
                },

            "tang_2005":{
                "title": "A Highly Efficient Organocatalyst for Direct Aldol Reactions of Ketones with Aldedydes",
                "volume": "127",
                "doi": "10.1021/ja0510156",
                "pages": "9285-9289",
                "number": "25",
                "journaltitle": "Journal of the American Chemical Society",
                "shortjournal": "J. Am. Chem. Soc.",
                "author": "Tang, Z.; Yang, Z.-H.; Chen, X.-H.; Cun, L.-F.; Mi, A.-Q.; Jiang, Y.-Z.; Gong, L.-Z.",
                "date": "2005-06-01",
                "ENTRYTYPE": "article",
                "ID": "tang_2005"
            },

            "tang_2004":{
                "title": "Enantioselective direct aldol reactions catalyzed by l-prolinamide derivatives",
                "volume": "101",
                "doi": "10.1073/pnas.0307176101",
                "pages": "5755-5760",
                "number": "16",
                "journaltitle": "Proceedings of the National Academy of Sciences of the United States of America",
                "shortjournal": "PNAS",
                "author": "Tang, Z.; Jiang, F.; Cui, X.; Gong, L.-Z.; Mi, A.-Q.; Jiang, Y.-Z.; Wu, Y.-D.",
                "date": "2004-04-20",
                "ENTRYTYPE": "article",
                "ID": "tang_2004"
            },

            "tanaka_1984": {
                "title": "Surface conductive glass",
                "volume": "61",
                "doi": "10.1021/ed061p1104",
                "pages": "1104",
                "number": "12",
                "journaltitle": "Journal of Chemical Education",
                "shortjournal": "J. Chem. Educ.",
                "author": "Tanaka, J.; Suib, S. L.",
                "date": "1984-12-01",
                "ENTRYTYPE": "article",
                "ID": "tanaka_1984"
            },

            "thomson_1971":
                {"title": "Naturally Occurring Quinones",
                    "edition": "2nd ed.",
                    "pagetotal": "742",
                    "publisher": "Academic Press",
                    "city": "New York",
                    "author": "Thomson, R.",
                    "date": "1971",
                    "ENTRYTYPE": "book",
                    "ID": "thomson_1971"
                },
            "thomsen_1992": {
                            "title": "Determination of the solubility product of copper(II) tartrate",
                            "volume": "69",
                            "doi": "10.1021/ed069p328",
                            "pages": "328",
                            "number": "4",
                            "journaltitle": "Journal of Chemical Education",
                            "shortjournal": "J. Chem. Educ.",
                            "author": "Thomsen, M. W.",
                            "date": "1992",
                            "ENTRYTYPE": "article",
                            "ID": "thomsen_1992"
                        },
            "vainio_1997": {
                "title": "Aspirin for the second hundred years: new uses for an old drug",
                "volume": "81",
                "pages": "151-152",
                "number": "4",
                "journaltitle": "Pharmacology \\& Toxicology",
                "shortjournal": "Pharmacol. Toxicol.",
                "author": "Vainio, H.; Morgan, G.",
                "date": "1997-10",
                "ENTRYTYPE": "article",
                "ID": "vainio_1997"
            },

            "vanhouten_2002": {
                "title": "A Century of Chemical Dynamics Traced through the Nobel Prizes. 1992: Rudolph A. Marcus",
                "volume": "79",
                "pages": "1055",
                "number": "9",
                "journaltitle": "Journal of Chemical Education",
                "shortjournal": "J. Chem. Educ.",
                "author": "Van Houten, J.",
                "date": "2002",
                "ENTRYTYPE": "article",
                "ID": "vanhouten_2002"
            },

            "vonaderkas_2010": {
                "title": "Application of photoacoustic infrared spectroscopy in the forensic analysis of artists' inorganic pigments",
                "volume": "77",
                "doi": "10.1016/j.saa.2010.08.027",
                "pages": "954-959",
                "number": "5",
                "journaltitle": "Spectrochimica Acta Part A: Molecular and Biomolecular Spectroscopy",
                "shortjournal": "Spectrochim Acta A Mol Biomol Spectrosc",
                "author": "von Aderkas, E. L.; Barsan, M. M.; Gilson, D. F. R. and Butler, I. S.",
                "date": "2010-12",
                "ENTRYTYPE": "article",
                "ID": "vonaderkas_2010"
            },

            "vedejs_1988": {
                "title": "Mechanism of the Wittig reaction: the role of substituents at phosphorus",
                "volume": "110",
                "doi": "10.1021/ja00220a037",
                "pages": "3948-3958",
                "number": "12",
                "journaltitle": "Journal of the American Chemical Society",
                "shortjournal": "J. Am. Chem. Soc.",
                "author": "Vedejs, E.; Marth, C. F.",
                "date": "1988-06",
                "ENTRYTYPE": "article",
                "ID": "vedejs_1988"
            },

            "wang_2004": {
                "title": "Development and testing of a general amber force field",
                "volume": "25",
                "doi": "10.1002/jcc.20035",
                "pages": "1157-1174",
                "number": "9",
                "journaltitle": "Journal of Computational Chemistry",
                "shortjournal": "J Comput Chem",
                "author": "Wang, J.; Wolf, R. M.; Caldwell, J. W.; Kollman, P. A. and Case, D. A.",
                "date": "2004-07-15",
                "ENTRYTYPE": "article",
                "ID": "wang_development_2004"
            },

            "wasley_1973": {
                "title": "Synthesis of 1-Arylsulfonylpyrroles",
                "volume": "3",
                "doi": "10.1080/00397917308065922",
                "pages": "303-304",
                "number": "4",
                "journaltitle": "Synthetic Communications",
                "shortjournal": "Synth. Comm.",
                "author": "Wasley, J. W. F.; Chan, K.",
                "date": "1973-01-01",
                "ENTRYTYPE": "article",
                "ID": "wasley_1973"
            },

            "wittig_1954a": {
                "title": "Über Triphenyl-phosphin-methylene als olefinbildende Reagenzien I",
                "volume": "87",
                "doi": "10.1002/cber.19540870919",
                "pages": "1318-1330",
                "number": "9",
                "journaltitle": "Chemische Berichte",
                "shortjournal": "Chem. Ber.",
                "author": "Wittig, G.; Schöllkopf, U.",
                "date": "1954",
                "ENTRYTYPE": "article",
                "ID": "wittig_1954a"
            },

            "wittig_1954b": {
                "title": "Über Triphenyl-phosphinmethylene als olefinbildende Reagenzien II",
                "volume": "88",
                "doi": "10.1002/cber.19550881110",
                "pages": "1654-1666",
                "number": "11",
                "journaltitle": "Chemische Berichte",
                "shortjournal": "Chem. Ber.",
                "author": "Wittig, G.; Haag, W.",
                "date": "1955",
                "ENTRYTYPE": "article",
                "ID": "wittig_1954a"
            },

            "wu_2006": {
                "title": "Highly Efficient and Reusable Dendritic Catalysts Derived from N-Prolylsulfonamide for the Asymmetric Direct Aldol Reaction in Water",
                "volume": "8",
                "doi": "10.1021/ol061418q",
                "pages": "4417-4420",
                "number": "20",
                "journaltitle": "Organic Letters",
                "shortjournal": "Org. Lett.",
                "author": "Wu, Y.; Zhang, Y.; Yu, M.; Zhao, G.; Wang, S.",
                "date": "2006",
                "ENTRYTYPE": "article",
                "ID": "wu_2006"
            },

            "web-nobel_2001": {
                "source": "Nobel Media AB (nobelprize.org)",
                "title": "The Nobel Prize in Chemistry 2001",
                "url": "https://www.nobelprize.org/nobel_prizes/chemistry/laureates/2001/",
                "access_date": "Dec 5, 2017",
                "ENTRYTYPE": "website"
            },

            "web-nobel_2010": {
                "source": "Nobel Media AB (nobelprize.org)",
                "title": "The Nobel Prize in Chemistry 2010",
                "url": "https://www.nobelprize.org/nobel_prizes/chemistry/laureates/2010/",
                "access_date": "Dec 5, 2017",
                "ENTRYTYPE": "website"
            },

            "web-nobel_1965": {
                "source": "Nobel Media AB (nobelprize.org)",
                "title": "The Nobel Prize in Chemistry 1965 Award Ceremony Speech",
                "url": "https://www.nobelprize.org/nobel_prizes/chemistry/laureates/1965/press.html",
                "access_date": "Dec 5, 2017",
                "ENTRYTYPE": "website"
            },


            "article_year":
                {"title": "",
                    "volume": "",
                    "doi": "",
                    "pages": "",
                    "number": "",
                    "journaltitle": "",
                    "shortjournal": "",
                    "author": "",
                    "date": "",
                    "ENTRYTYPE": "article",
                    "ID": ""
                },

            "book_year":
                {"title": "",
                    "edition": "",
                    "pagetotal": "",
                    "publisher": "",
                    "city": "",
                    "author": "",
                    "date": "",
                    "ENTRYTYPE": "book",
                    "ID": ""
                }

        };

    var item = document.createElement('li');
    var authors = document.createElement('span');
    if (result[entry]['ENTRYTYPE'] == 'comment')
    {
        var comment = result[entry]['comment'];
        var comments = document.createElement('span');
        comments.appendChild(document.createTextNode(comment));
        item.appendChild(comments);
    }
    else {
        var title = result[entry]['title'];
        var titles = document.createElement('span');
        titles.appendChild(document.createTextNode(title + '. '));

        if (result[entry]['ENTRYTYPE'] == 'website') {
            var source = result[entry]['source'];
            var url = result[entry]['url'];
            var access_date = result[entry]['access_date'];
            var sources = document.createElement('span');
            sources.appendChild(document.createTextNode(source + '. '));
            var urls = document.createElement('span');
            urls.appendChild(document.createTextNode(url + ' '));
            var access_dates = document.createElement('span');
            access_dates.appendChild(document.createTextNode('(' + access_date + ').'));

            item.appendChild(sources);
            item.appendChild(titles);
            item.appendChild(urls);
            item.appendChild(access_dates);

        }
        else if (result[entry]['ENTRYTYPE'] == 'article') {
            var journal = result[entry]['journaltitle'];
            var author = result[entry]['author'];
            var year = result[entry]['date'];
            year = year.substring(0, 4);
            var volume = result[entry]['volume'];
            var page = result[entry]['pages'];
            authors.appendChild(document.createTextNode(author + ' '));
            var journals = document.createElement('i');
            journals.appendChild(document.createTextNode(journal + ', '));
            var years = document.createElement('b');
            years.appendChild(document.createTextNode(year + ', '));
            var volumes = document.createElement('i');
            volumes.appendChild(document.createTextNode(volume + ', '));
            var pages = document.createElement('span');
            pages.appendChild(document.createTextNode(page + '.'));
            item.appendChild(authors);
            item.appendChild(titles);
            item.appendChild(journals);
            item.appendChild(years);
            item.appendChild(volumes);
            item.appendChild(pages);
        }
        else if (result[entry]['ENTRYTYPE'] == 'book') {
            var author = result[entry]['author'];
            var publisher = result[entry]['publisher'];
            var city = result[entry]['city'];
            var year = result[entry]['date'];
            year = year.substring(0, 4);
            authors.appendChild(document.createTextNode(author + ' '));
            var titles = document.createElement('i');
            titles.appendChild(document.createTextNode(title + '. '));
            var publishers = document.createElement('span');
            publishers.appendChild(document.createTextNode(publisher + ': '));
            var cities = document.createElement('span');
            cities.appendChild(document.createTextNode(city + ', '));
            var years = document.createElement('span');
            years.appendChild(document.createTextNode(year + '. '));

            item.appendChild(authors);
            item.appendChild(titles);
            item.appendChild(publishers);
            item.appendChild(cities);
            item.appendChild(years);
        }
        else if (result[entry]['ENTRYTYPE'] == 'chapter') {

            var chaptertitle = result[entry]['chaptertitle'];
            var author = result[entry]['author'];
            var editor = result[entry]['editor'];
            var publisher = result[entry]['publisher'];
            var city = result[entry]['city'];
            var year = result[entry]['date'];
            var page = result[entry]['page'];
            year = year.substring(0, 4);
            authors.appendChild(document.createTextNode(author + ' '));
            var chaptertitles = document.createElement('span');
            chaptertitles.appendChild(document.createTextNode(chaptertitle + '. In '));
            var titles = document.createElement('i');
            titles.appendChild(document.createTextNode(title + '; '));
            var editors = document.createElement('span');
            editors.appendChild(document.createTextNode(editor + ', Ed. '));
            var publishers = document.createElement('span');
            publishers.appendChild(document.createTextNode(publisher + ': '));
            var cities = document.createElement('span');
            cities.appendChild(document.createTextNode(city + ', '));
            var years = document.createElement('span');
            years.appendChild(document.createTextNode(year + '. '));
            var pages = document.createElement('span');
            pages.appendChild(document.createTextNode('pp ' + page + '.'));

            item.appendChild(authors);
            item.appendChild(chaptertitles);
            item.appendChild(titles);
            item.appendChild(editors);
            item.appendChild(publishers);
            item.appendChild(cities);
            item.appendChild(years);
            item.appendChild(pages);
        }
    }
        document.getElementById("reference").appendChild(item);
    }

/*
<div id="references"><h2>References</h2>
    <ol id="reference">
               <script>bibentry('aktoudianakis_2008')</script>
    </ol>
*/

function makeprelab(ids) {
    var header = document.createElement('h4');
    header.appendChild(document.createTextNode('Pre-Lab Questions (Compiled from the Lab Manual)'));
    var description = document.createElement('p');
    description.appendChild(document.createTextNode('Answer these questions on the back of the data sheet that you will submit to your TA.'));
    var prelab_list = document.createElement('ol');
    for (i = 0; i < ids.length; i++) {
        var text = document.getElementById(ids[i]).textContent;

        var item = document.createElement('li');
        item.appendChild(document.createTextNode(text));
        prelab_list.appendChild(item);
    }
    document.getElementById('prelab').appendChild(header);
    document.getElementById('prelab').appendChild(description).appendChild(prelab_list);

}

function copyright() {
    var copy_message = document.createElement('p');
    var year =(new Date()).getFullYear().toString();
    var message = 'Copyright McGill University' + ' ' + year;
    copy_message.appendChild(document.createTextNode(message));

    document.getElementById('copyright').appendChild(copy_message);
}



function write_molecule (molfile, name) {

    var transformBallAndStick = new ChemDoodle.TransformCanvas3D(name, 250, 250);
    transformBallAndStick.specs.set3DRepresentation('Ball and Stick');
    transformBallAndStick.specs.backgroundColor = 'black';
    ChemDoodle.ELEMENT['Ag'].jmolColor = '#646464';
    ChemDoodle.ELEMENT['Ag'].vdWRadius = '1.6';
    console.log(ChemDoodle.ELEMENT['Ag'].vdWRadius);
    ChemDoodle.ELEMENT['Pt'].vdWRadius = '1.6';
    ChemDoodle.ELEMENT['Pt'].jmolColor = '#646464';
    console.log(ChemDoodle.ELEMENT['Pt'].vdWRadius);
    ChemDoodle.ELEMENT['Cd'].jmolColor = '#646464';
    ChemDoodle.ELEMENT['Cd'].vdWRadius = '1.6';
    console.log(ChemDoodle.ELEMENT['Cd'].vdWRadius);
    ChemDoodle.ELEMENT['Co'].jmolColor = '#646464';
    ChemDoodle.ELEMENT['Co'].vdWRadius = '1.6';
    console.log(ChemDoodle.ELEMENT['Co'].vdWRadius);
    ChemDoodle.ELEMENT['Cl'].vdWRadius = '1.6';
    var molecule = ChemDoodle.readMOL(molfile, 1);

    transformBallAndStick.loadMolecule(molecule);
    console.log(transformBallAndStick);
}

var cobalt = '[Co(NH3)4]Cl3.mol\n' +
'\n' +
'\n' +
' 25 24  0  0  0                 1 V2000\n' +
'    0.0205    0.7986   -0.1103 Co  0  0  0  0  0\n' +
'    0.9479   -0.0092    1.5451 N   0  3  0  0  0\n' +
'   -0.7905    2.2746    1.0800 N   0  3  0  0  0\n' +
'   -1.6335   -0.3848    0.2333 N   0  3  0  0  0\n' +
'    1.6503    2.0110   -0.4681 N   0  3  0  0  0\n' +
'    0.8662   -0.6817   -1.2715 N   0  3  0  0  0\n' +
'   -0.9139    1.5787   -1.7751 N   0  3  0  0  0\n' +
'    1.5884   -0.7697    1.2225 H   0  0  0  0  0\n' +
'    0.2100   -0.3931    2.1783 H   0  0  0  0  0\n' +
'    1.4864    0.7493    2.0216 H   0  0  0  0  0\n' +
'   -1.3797    2.8945    0.4796 H   0  0  0  0  0\n' +
'   -0.0056    2.8146    1.5098 H   0  0  0  0  0\n' +
'   -1.3705    1.8163    1.8192 H   0  0  0  0  0\n' +
'   -2.3878   -0.0929   -0.4291 H   0  0  0  0  0\n' +
'   -1.9369   -0.2426    1.2235 H   0  0  0  0  0\n' +
'   -1.3635   -1.3811    0.0692 H   0  0  0  0  0\n' +
'    1.3961    2.6852   -1.2254 H   0  0  0  0  0\n' +
'    2.4496    1.4065   -0.7651 H   0  0  0  0  0\n' +
'    1.8805    2.5188    0.4161 H   0  0  0  0  0\n' +
'    0.6054   -0.5061   -2.2685 H   0  0  0  0  0\n' +
'    0.4935   -1.6032   -0.9486 H   0  0  0  0  0\n' +
'    1.9034   -0.6398   -1.1480 H   0  0  0  0  0\n' +
'   -0.7175    0.9483   -2.5855 H   0  0  0  0  0\n' +
'   -0.5294    2.5348   -1.9491 H   0  0  0  0  0\n' +
'   -1.9405    1.6234   -1.5831 H   0  0  0  0  0\n' +
'  1  2  1  1  0  0\n' +
'  1  3  1  1  0  0\n' +
'  1  4  1  0  0  0\n' +
'  1  5  1  0  0  0\n' +
'  1  6  1  6  0  0\n' +
'  1  7  1  6  0  0\n' +
'  2  8  1  0  0  0\n' +
'  2  9  1  1  0  0\n' +
'  2 10  1  1  0  0\n' +
'  3 11  1  6  0  0\n' +
'  3 12  1  0  0  0\n' +
'  3 13  1  1  0  0\n' +
'  4 14  1  6  0  0\n' +
'  4 15  1  1  0  0\n' +
'  4 16  1  0  0  0\n' +
'  5 17  1  6  0  0\n' +
'  5 18  1  0  0  0\n' +
'  5 19  1  1  0  0\n' +
'  6 20  1  6  0  0\n' +
'  6 21  1  0  0  0\n' +
'  6 22  1  0  0  0\n' +
'  7 23  1  6  0  0\n' +
'  7 24  1  0  0  0\n' +
'  7 25  1  0  0  0\n' +
'M  END';

var silver = 'AgNH32+\n' +
    ' \n' +
    '\n' +
    '  9  8  0  0  0  0  0  0  0  0  2 V2000\n' +
    '   -0.4863    0.1073   -0.0001 Ag  0  3  0  0  0  0\n' +
    '    0.7410   -1.4963   -0.0000 N   0  0  0  0  0  0\n' +
    '   -1.7143    1.7112    0.0001 N   0  0  0  0  0  0\n' +
    '    0.8602   -1.8976   -0.9302 H   0  0  0  0  0  0\n' +
    '    1.6783   -1.2713    0.3353 H   0  0  0  0  0  0\n' +
    '    0.3991   -2.2506    0.5945 H   0  0  0  0  0  0\n' +
    '   -1.5778    2.3076    0.8156 H   0  0  0  0  0  0\n' +
    '   -1.5778    2.3078   -0.8160 H   0  0  0  0  0  0\n' +
    '   -2.6997    1.4488   -0.0001 H   0  0  0  0  0  0\n' +
    '  2  1  1  0     0\n' +
    '  3  1  1  0     0\n' +
    '  2  4  1  0     0\n' +
    '  2  5  1  0     0\n' +
    '  2  6  1  0     0\n' +
    '  3  7  1  0     0\n' +
    '  3  8  1  0     0\n' +
    '  3  9  1  0     0\n' +
    'M  CHG  1   1   1 \n' +
    'M  END';

var platinum = 'PtNH342+\n' +
    ' \n' +
    '\n' +
    ' 17 16  0  0  0  0  0  0  0  0  2 V2000\n' +
    '   -0.4659   -0.3865   -0.0001 Pt  0  2  0  0  0  0\n' +
    '    1.2692    1.1525   -0.0001 N   0  0  0  0  0  0\n' +
    '   -2.0053    1.3480   -0.0001 N   0  0  0  0  0  0\n' +
    '    1.0737   -2.1208   -0.0001 N   0  0  0  0  0  0\n' +
    '   -2.2006   -1.9254   -0.0001 N   0  0  0  0  0  0\n' +
    '    1.8716    1.0568    0.8169 H   0  0  0  0  0  0\n' +
    '    1.8716    1.0568   -0.8170 H   0  0  0  0  0  0\n' +
    '    0.9310    2.1141   -0.0001 H   0  0  0  0  0  0\n' +
    '   -2.6147    1.3246   -0.8169 H   0  0  0  0  0  0\n' +
    '   -2.6147    1.3246    0.8168 H   0  0  0  0  0  0\n' +
    '   -1.5551    2.2624   -0.0001 H   0  0  0  0  0  0\n' +
    '    0.9784   -2.7232    0.8168 H   0  0  0  0  0  0\n' +
    '    0.9784   -2.7233   -0.8169 H   0  0  0  0  0  0\n' +
    '    2.0350   -1.7810   -0.0001 H   0  0  0  0  0  0\n' +
    '   -2.1776   -2.5348   -0.8168 H   0  0  0  0  0  0\n' +
    '   -2.1776   -2.5348    0.8167 H   0  0  0  0  0  0\n' +
    '   -3.1145   -1.4737   -0.0001 H   0  0  0  0  0  0\n' +
    '  2  1  1  0     0\n' +
    '  3  1  1  0     0\n' +
    '  4  1  1  0     0\n' +
    '  5  1  1  0     0\n' +
    '  2  6  1  0     0\n' +
    '  2  7  1  0     0\n' +
    '  2  8  1  0     0\n' +
    '  3  9  1  0     0\n' +
    '  3 10  1  0     0\n' +
    '  3 11  1  0     0\n' +
    '  4 12  1  0     0\n' +
    '  4 13  1  0     0\n' +
    '  4 14  1  0     0\n' +
    '  5 15  1  0     0\n' +
    '  5 16  1  0     0\n' +
    '  5 17  1  0     0\n' +
    'M  CHG  1   1   2 \n' +
    'M  END';

var cadmium = '\n' +
    '  WLViewer         3D                             0\n' +
    '\n' +
    '  5  4  0  0  0  0  0  0  0  0  0\n' +
    '   -0.1205    0.7643    3.7726 Co  0  0  0  0  0  0  0  0  0  1\n' +
    '    1.5610    1.8794    2.8189 Cl  0  0  0  0  0  0  0  0  0  2\n' +
    '    0.7929   -0.6895    5.2937 Cl  0  0  0  0  0  0  0  0  0  3\n' +
    '   -1.8020    1.8794    4.7263 Cl  0  0  0  0  0  0  0  0  0 19\n' +
    '   -1.0340   -0.6895    2.2515 Cl  0  0  0  0  0  0  0  0  0 20\n' +
    '  1  2  1  0  0  0\n' +
    '  1  3  1  0  0  0\n' +
    '  1  4  1  0  0  0\n' +
    '  1  5  1  0  0  0\n' +
    'M  END';

$(function() {
    var $question = $('.quest');
    var $answer = $('.answer');
    var $correct = $('.correct');
    var $message = $('#smalldis');
    var $graph = $('#graph_qs');

    $answer.hide();
    $message.hide();


    $('.button').on('click', function(e) {
        $parent = $(this).parent();
        $sibling = $parent.next();
        $grandpa = $parent.parent();
        $correct = $grandpa.children('.a').children('.correct');
        $sibling.show();
        console.log('test');
        $correct.addClass('hilite');
        $(this).hide();
    });

    if ($(window).width() < 650) {
        $message.show();
        $graph.hide();
    }

    $(window).resize(function() {
        if ($(window).width() > 649) {
            $message.hide();
            $graph.show();
        }

        else {
            $message.show();
            $graph.hide();
        }


    });


});

function mystery () {
    var $NaCl = (5 + Math.random()).toFixed(1);
    var $water = (25 + Math.random()).toFixed(1);
    var $NaCl_conc = concentration($NaCl, 58.44, $water/1000).toFixed(1);
    $('#NaCl').append($NaCl);
    $('#water').append($water);
    $('#NaCl_conc').append($NaCl_conc);
}

function concentration (mass, molar_mass, volume) {
    var conc = mass/(molar_mass* volume);
    return conc
}

function periodic () {
    var $absorbance = 0.3 + Math.random() / 13;
    $absorbance = parseFloat($absorbance.toFixed(2));
    var $concentration = $absorbance / 0.003;
    $('#absorbance').append($absorbance.toFixed(3));
    $('#concentration').append($concentration.toFixed(0));
}

function periodic_2 () {
    var $concentration = 100 + Math.random() * 300;
    $concentration = parseFloat($concentration.toFixed(0));
    var $absorbance = $concentration * 0.003;
    $('#abs_chlo').append($absorbance.toFixed(2));
    $('#con_chlo').append($concentration.toFixed(0));
}

function gas1 () {
    var $hcl_mL = 3 + Math.random()
    var $hcl_mL = parseFloat($hcl_mL.toFixed(3))
    var $hcl_mol = 3 + Math.random()
    var $hcl_mol = parseFloat($hcl_mol.toFixed(4))
    var $caco3 = $hcl_mol * $hcl_mL * 100.0869 / 2
    $('#hcl').append($hcl_mL.toFixed(3));
    $('#molar').append($hcl_mol.toFixed(4));
    $('#caco3answ').append($caco3.toFixed(1));
};
function gas2 () {
    var $kPa = 99 + Math.random()
    var $kPa = parseFloat($kPa.toFixed(1))
    var $press = $kPa - 2.72
    $('#kPa').append($kPa.toFixed(1));
    $('#press').append($press.toFixed(1));
};
function gas3 () {
    var $weight = 0.9 + Math.random() / 5
    var $weight = parseFloat($weight.toFixed(2))
    var $caco3w = 300 + Math.random() * 10
    var $caco3w = parseFloat($caco3w.toFixed(1))
    var $ww = $caco3w / ($weight * 10)
    $('#weight').append($weight.toFixed(2));
    $('#caco3w').append($caco3w.toFixed(1));
    $('#ww').append($ww.toFixed(1));
};
function gas4 () {
    var $mass = 0.35 + Math.random() / 10
    $mass = parseFloat($mass.toFixed(4))
    var $purity = 99 + Math.random()
    $purity = parseFloat($purity.toFixed(1))
    var $pi = 50 + Math.random()
    $pi = parseFloat($pi.toFixed(1))
    var $pf = 120 + Math.random() * 10
    $pf = parseFloat($pf.toFixed(1))
    var $ti = 20 + Math.random() / 2
    $ti = parseFloat($ti.toFixed(2))
    var $tf = 21.5 + Math.random() / 2
    var $tf = parseFloat($tf.toFixed(2))
    var $tfk = $tf + 273.15
    var $tik = $ti + 273.15
    var $pih2o = 20 * 2.33 / $ti
    var $pfh2o = 21.5 * 2.56 / $tf
    var $pip = $pi - $pih2o
    var $pfp = $pf - $pfh2o
    var $V = (($mass * ($purity / 100)) / 100.0869) * (8.314 / (($pfp / $tfk) - ($pip / $tik)))
    $('#mass').append($mass.toFixed(4))
    $('#purity').append($purity.toFixed(1))
    $('#pi').append($pi.toFixed(1))
    $('#pf').append($pf.toFixed(1))
    $('#ti').append($ti.toFixed(2))
    $('#tf').append($tf.toFixed(2))
    $('#volume').append($V.toFixed(3))
};
function gas5 () {
    var $volume = 0.135 + Math.random() / 100
    $volume = parseFloat($volume.toFixed(3))
    var $pi = 45 + Math.random()
    $pi = parseFloat($pi.toFixed(1))
    var $pf = 128 + Math.random() * 10
    $pf = parseFloat($pf.toFixed(1))
    var $ti = 20 + Math.random() / 2
    $ti = parseFloat($ti.toFixed(2))
    var $tf = 21.5 + Math.random() / 2
    var $tfk = $tf + 273.15
    var $tf = parseFloat($tf.toFixed(2))
    var $tik = $ti + 273.15
    var $pih2o = 20 * 2.33 / $ti
    var $pfh2o = 21.5 * 2.56 / $tf
    var $pip = $pi - $pih2o
    var $pfp = $pf - $pfh2o
    var $amount = ((($pfp / $tfk) - ($pip / $tik)) * ($volume / 8.314)) * 1000
    $('#Vf').append($volume.toFixed(3))
    $('#pi2').append($pi.toFixed(1))
    $('#pf2').append($pf.toFixed(1))
    $('#ti2').append($ti.toFixed(2))
    $('#tf2').append($tf.toFixed(2))
    $('#amount').append($amount.toFixed(2))
};

$(function (equilibrium) {
    var $abs = 0.2 + Math.random() / 10;
    $abs = parseFloat($abs.toFixed(3))
    var $conc = $abs / (1.00 * 4700)
    $('#abs').append($abs.toFixed(3));
    $('#conc').append($conc.toExponential(2).toString().replace('e', ' x 10^'));
});

$(function (kinetics) {
    var $abs = 0.2 + Math.random() / 10;
    $abs = parseFloat($abs.toFixed(3))
    var $conc = $abs / (1.00 * 4700)
    $('#abs').append($abs.toFixed(3));
    $('#conc').append($conc.toExponential(2));
});

function periodic_date() {
    var return_date = new Date('February 18, 2019');
    var due_date = new Date('February 25, 2019');
    var lab_date = new Date('February 11, 2019')

    $('.return_date').append(return_date.toDateString());
    $('.due_date').append(due_date.toDateString());
    $('.lab_date').append(lab_date.toDateString());


};