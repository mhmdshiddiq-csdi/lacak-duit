import { CurrencyComboBox } from '@/components/CurrencyComboBox'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const page = () => {
	console.log("tes");
  return (
    <>
		{/* Header */}
        <div className="border-b bg-card">
					<div className="container flex flex-wrap items-center justify-between gap-6 p-8">
						<div className="">
							<p className='text-3xl font-bold'>Manage</p>
							<p className='text-muted-foreground'>Manage your account settings and categories</p>
						</div>
					</div>
        </div>
				{/* END HEADER */}
				<div className="container flex flex-col p-8 gap-4">
					<Card>
						<CardHeader>
							<CardTitle>Currency</CardTitle>
							<CardDescription>
								Set your default currency for transaction
							</CardDescription>
						</CardHeader>
						<CardContent>
							<CurrencyComboBox />
						</CardContent>
					</Card>
				</div>
    </>
  )
}

export default page
