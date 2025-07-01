import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const categories = [
	{
		title: 'HOTEL',
		clients: [
			'PALM GARDEN HOTEL IOI RESORT',
			'LE APPLE KLCC',
			'THE ROYAL CHULAN BUKIT BINTANG',
			'BEST WESTERN I CITY SHAH ALAM',
			'DORSETT PUTRAJAYA',
			'LE MERIDIEN PUTRAJAYA (MARRIOT INN)',
			'BANGI HOTEL SDN BHD (PUTRAJAYA)',
			'SOFITEL KUALA LUMPUR DAMANSARA–DC HOTEL',
			'COSMO HOTEL KUALA LUMPUR',
			'MERCURE KUALA LUMPUR SHAW PARADE HOTEL',
			'PULLMAN KLCC HOTEL & RESIDENCES – (ACETREND CORPORATION SDN BHD)',
			'ARENAA STAR LUXURY HOTEL SEN BHAD',
			'CASUARINA @PANGKOR',
			'LANAI CASUARINA CEMPAKA SARI PART',
			'GRAND ION DELEMEN HOTEL GENTING HIGHLAND',
			'HOTEL CASUARINA@MERU',
			'DORSETT REGENCY HOTEL-KUALA LUMPUR',
			'DORSETT REGENCY HOTEL-BUKIT BINTANG',
			'GRAND BLUEWAVE HOTEL',
			'MARRIOT PUTRAJAYA HOTEL',
			'CITITEL EXPRESS– (SALENT GLORY)',
			'THE WEMBLEY GOLF & MILES– (SALENT GLORY)',
			'THE ROYALE CHULAN KUALA LUMPUR',
			'SEBANA GOLF & MARINA RESORT BERHAD',
			'PALM GARDEN GOLF COURSE BHD (PALM GARDEN GOLF)',
			'KEA VALLEY HOTEL',
			'GEO HOTEL GEORGETOWN',
			'SUNWAY HOTEL SEBERANG JAYA',
			'SUNWAY HOTEL GEORGETOWN',
			'HOTEL BY DORSETT',
		],
	},
	{
		title: 'BUILDING / RESIDENCE / MALL',
		clients: [
			'JMB SELAYANG CENTRE POINT',
			'VISTANA CONDO',
			'INGRESS AUTO – PUCHONG, BANGI',
			'SELAYANG MALL',
			'THE ARA BANGSAR CONDOMINIUM',
			'THE KATANA RESIDENCE KL',
			'NOMAD SERVICES RESIDENCE',
			'TEXCHEM RESOURCES BERHAD',
			'IOI SQUARE PUTRAJAYA',
			'THE GROVE',
			'MAYANG CONDO',
			'THE WEST SIDE ONE',
			'DUTA KENSINGTON',
			'ZENIAPARKHOMES',
			'ZEHN RESIDENCE',
			'SERIALANGKASA',
			'THE NATURA',
			'THE RAINZ, BUKIT JALIL',
			'THE GROVE WATERSCAPE VILLAS',
			'SUBANG PENDARA COURT 2',
			'TWIN @DAMANSARA HEIGHT–JTWlN',
			'SOHO RETAIL TOWER A (WORLD CITY POINT SDN BHD)',
			'CRAISI RESIDENCES @ CYBERJAYA',
			'DORSETT RESIDENCE',
			'DFV ESTATE (M) SDN BHD',
			'LIFE CENTRE',
			'SCOVILLA RESIDENCES',
			'SRI JATI',
			'SRI JATI RESIDENCE',
			'ONE MENURUNG CONDOMINIUM',
			'LAGUNA RESIDENCES',
			'SCHUMANN CYBERJAYA',
			'THE HAMPT RESIDENCE',
			'ATLES MEDICAL SDN BHD',
			'PRIMA 16 CONDO',
			'TABLE 123 SDN BHD',
			'VILLA SERI @SAUJANA',
			'PJ MIDTOWN',
			'MIDA (MALAYSIA INVESTMENT)',
		],
	},
	{
		title: 'GROUP',
		clients: ['MR DIY TRADING SDN BHD – 405 STORE'],
	},
	{
		title: 'CORPORATE',
		clients: [
			'PICOMS – PUSRAWIINTERNATIONAL COLLEGE (PICOMS)',
			'FIM – FOOD INSTITUTE OFMALAYSIA',
			'MAJLIS SUKAN NEGARA',
			'MALAYSIAN TECHNOLOGY DEVELOPMENT CORPORATION SDN BHD (MTDC)',
		],
	},
	{
		title: 'PETROL STATION OUTLETS',
		clients: ['SHELL PETROL PETRONZA'],
	},
	{
		title: 'GOVERNMENT AGENCIES',
		clients: ['MAJLIS SUKAN NEGARA (MSN)', 'TABUNG HAJI KELANA JAYA'],
	},
	{
		title: 'DEVELOPER',
		clients: [
			'I CITY PROPERTIES SDN BHD',
			'LT INDUSTRIES SDN BHD',
			'PROTASCO DEVELOPMENT SDN BHD',
		],
	},
];

const containerVariants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.15,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 30 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, type: 'spring' },
	},
};

const ListOfClients = () => {
	return (
		<div className="min-h-screen flex flex-col bg-[#f8fafc]">
			<Navbar />
			<section className="py-16 flex-1">
				<div className="max-w-5xl mx-auto px-4">
					<motion.h1
						initial={{ opacity: 0, y: -30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, type: 'spring' }}
						className="text-4xl font-bold text-center text-[#162957] mb-12"
					>
						List of Major Clients
					</motion.h1>

					{/* Logo Grid */}
					<motion.div
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, amount: 0.3 }}
						variants={{
							hidden: {},
							show: { transition: { staggerChildren: 0.07 } },
						}}
						className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 md:gap-6 justify-items-center mb-12"
					>
						{Array.from({ length: 23 }).map((_, i) => (
							<motion.div
								key={i}
								variants={{
									hidden: { opacity: 0, scale: 0.8, y: 30 },
									show: {
										opacity: 1,
										scale: 1,
										y: 0,
										transition: { type: 'spring', duration: 0.5 },
									},
								}}
								whileHover={{
									scale: 1.07,
									boxShadow: '0 4px 24px rgba(22,41,87,0.10)',
								}}
								className="bg-white rounded-lg flex items-center justify-center shadow p-2 md:p-3"
								style={{ minHeight: '70px' }}
							>
								<img
									src={`/images/major/major${i + 1}.png`}
									alt={`Major Client Logo ${i + 1}`}
									className="h-10 w-auto md:h-14 max-w-[90px] object-contain"
								/>
							</motion.div>
						))}
					</motion.div>

					<motion.div
						variants={containerVariants}
						initial="hidden"
						animate="show"
						className="grid md:grid-cols-2 gap-10"
					>
						{categories.map((cat, idx) => (
							<motion.div
								key={cat.title}
								variants={itemVariants}
								className="bg-white rounded-xl shadow-md p-6"
								whileHover={{
									scale: 1.03,
									boxShadow: '0 8px 32px rgba(22,41,87,0.10)',
								}}
							>
								<h2 className="text-xl font-bold text-[#18443d] mb-4 uppercase tracking-wide">
									{cat.title}
								</h2>
								<ol className="list-decimal list-inside space-y-1 text-gray-800 text-sm md:text-base">
									{cat.clients.map((client, i) => (
										<motion.li
											key={client}
											initial={{ opacity: 0, x: -20 }}
											whileInView={{ opacity: 1, x: 0 }}
											transition={{ duration: 0.4, delay: i * 0.02 }}
											viewport={{ once: true, amount: 0.7 }}
										>
											{client}
										</motion.li>
									))}
								</ol>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default ListOfClients;