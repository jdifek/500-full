import { useTranslations } from 'next-intl'

const Contact = () => {
	const tComponents = useTranslations('Components')
	const tContact = useTranslations('About.contact')

	return (
		<>
			<div className='flex flex-col gap-7 mt-7 mb-3'>
				{/* Ссылка "Вернуться" */}
				<p className='font-normal text-[15px] leading-3.5 text-[#14229e] cursor-pointer hover:underline'>
					{tComponents('return')}
				</p>

				{/* Контейнер для контактной информации */}
				<div className='flex flex-col gap-4'>
					<h2 className='font-bold text-[14px] leading-3.5 text-[#212529]'>
						{tContact('title')}
					</h2>

					{/* Контактные данные */}
					<div className='flex flex-col gap-1 font-normal text-[13px] leading-5 text-[#000000]'>
						<p>
							<span className='font-medium'>Email: </span>
							<a
								href='mailto:hoyakap@gmail.com'
								className='text-[#14229e] hover:underline'
							>
								hoyakap@gmail.com
							</a>
						</p>
						<p>
							<span className='font-medium'>
								{tContact('forCooperationEmail')}:{' '}
							</span>
							<a
								href='mailto:support@don-vip.com'
								className='text-[#14229e] hover:underline'
							>
								support@don-vip.com
							</a>
						</p>
						<p className=' mb-5'>
							<span className='font-medium'>{tContact('address.title')}: </span>
							{tContact('address.label')}
						</p>
						<p>
							<span className='font-medium'>
								{tContact('companyName.title')}:{' '}
							</span>
							{tContact('companyName.label')}
						</p>
						<p>
							<span className='font-medium'>
								{tContact('partnerCompany.title')}:{' '}
							</span>
							{tContact('partnerCompany.label')}
						</p>
						<p>
							<span className='font-medium'>{tContact('tin')}: </span>
							250822605454
						</p>
						<p className=' mb-5'>
							<span className='font-medium'>{tContact('ogrnip')}: </span>
							3242536000050587
						</p>
						<p>
							<span className='font-medium'>{tContact('tel')}/WhatsApp: </span>
							<a
								href='https://wa.me/+79240040070'
								target='_blank'
								rel='noopener noreferrer'
								className='text-[#14229e] hover:underline'
							>
								+7 (924) 004 00 70
							</a>
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Contact
