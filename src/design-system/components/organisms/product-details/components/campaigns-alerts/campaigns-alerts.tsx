import React from 'react'
import { IProduct } from '../../../../../../types/product'
import { AlertBox, CampaignBox } from '../../../../atoms'
import { TAlertBox } from '../../../../atoms/alert-box/alert-box'
import { TCampaignBox } from '../../../../atoms/campaign-box/campaign-box'

interface ICampaignsAlerts extends Pick<IProduct, 'activeCampaign'> {
  limitedProduct?: TCampaignBox
  alertBox?: TAlertBox
}

const CampaignsAlerts = ({ activeCampaign, limitedProduct, alertBox }: ICampaignsAlerts) => {
  if (!limitedProduct && !alertBox && !activeCampaign) return null

  return (
    <>
      {activeCampaign?.title && <CampaignBox {...activeCampaign} hideSelectBtn />}

      {limitedProduct && <CampaignBox {...limitedProduct} limited hideSelectBtn />}

      {alertBox && <AlertBox {...alertBox} />}
    </>
  )
}

export { CampaignsAlerts }
