import { useState } from 'react'
import { Button } from './ui/button'
import { ArrowRight, ArrowLeft, Check } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

interface PriceEstimatorProps {
  onOpenConsultation: () => void
}

type Collection = 'contemporary' | 'traditional' | 'minimal' | null
type Size = 'small' | 'medium' | 'large' | 'xlarge' | null
type Worktop = 'laminate' | 'quartz' | 'granite' | 'solid-surface' | null
type SinkTap = 'standard' | 'premium' | 'luxury' | null
type Appliances = 'none' | 'essential' | 'premium' | 'luxury' | null
type Installation = 'self' | 'basic' | 'full' | null

interface EstimateData {
  collection: Collection
  size: Size
  worktop: Worktop
  sinkTap: SinkTap
  appliances: Appliances
  installation: Installation
}

const collections = [
  { id: 'contemporary' as const, name: 'Contemporary', description: 'Clean lines, handleless designs', basePrice: 6000 },
  { id: 'traditional' as const, name: 'Traditional', description: 'Classic shaker doors, timeless appeal', basePrice: 5500 },
  { id: 'minimal' as const, name: 'Minimal', description: 'Ultra-modern, sleek finishes', basePrice: 6500 },
]

const sizes = [
  { id: 'small' as const, name: 'Small', description: 'Up to 8 linear metres', multiplier: 1.0 },
  { id: 'medium' as const, name: 'Medium', description: '8-12 linear metres', multiplier: 1.4 },
  { id: 'large' as const, name: 'Large', description: '12-16 linear metres', multiplier: 1.8 },
  { id: 'xlarge' as const, name: 'Extra Large', description: '16+ linear metres', multiplier: 2.2 },
]

const worktops = [
  { id: 'laminate' as const, name: 'Laminate', description: 'Durable and budget-friendly', price: 800 },
  { id: 'quartz' as const, name: 'Quartz', description: 'Low maintenance, premium look', price: 2500 },
  { id: 'granite' as const, name: 'Granite', description: 'Natural stone elegance', price: 3000 },
  { id: 'solid-surface' as const, name: 'Solid Surface', description: 'Seamless contemporary finish', price: 3500 },
]

const sinkTaps = [
  { id: 'standard' as const, name: 'Standard', description: 'Quality basics included', price: 400 },
  { id: 'premium' as const, name: 'Premium', description: 'Designer taps, composite sink', price: 800 },
  { id: 'luxury' as const, name: 'Luxury', description: 'High-end finishes, filtered water', price: 1500 },
]

const appliancesOptions = [
  { id: 'none' as const, name: 'No Appliances', description: 'Supply your own', price: 0 },
  { id: 'essential' as const, name: 'Essential Pack', description: 'Oven, hob, hood', price: 1200 },
  { id: 'premium' as const, name: 'Premium Pack', description: 'Add fridge, dishwasher', price: 2800 },
  { id: 'luxury' as const, name: 'Luxury Pack', description: 'Full integrated suite', price: 5500 },
]

const installationOptions = [
  { id: 'self' as const, name: 'Self Install', description: 'DIY with our support guide', price: 0 },
  { id: 'basic' as const, name: 'Basic Installation', description: 'Professional fitting only', price: 1500 },
  { id: 'full' as const, name: 'Full Service', description: 'Including plumbing & electrics', price: 3500 },
]

export default function PriceEstimator({ onOpenConsultation }: PriceEstimatorProps) {
  const [step, setStep] = useState(1)
  const [estimate, setEstimate] = useState<EstimateData>({
    collection: null,
    size: null,
    worktop: null,
    sinkTap: null,
    appliances: null,
    installation: null,
  })

  const calculatePrice = () => {
    let total = 0
    
    if (estimate.collection && estimate.size) {
      const collectionData = collections.find(c => c.id === estimate.collection)
      const sizeData = sizes.find(s => s.id === estimate.size)
      if (collectionData && sizeData) {
        total += collectionData.basePrice * sizeData.multiplier
      }
    }
    
    if (estimate.worktop) {
      const worktopData = worktops.find(w => w.id === estimate.worktop)
      if (worktopData) total += worktopData.price
    }
    
    if (estimate.sinkTap) {
      const sinkTapData = sinkTaps.find(st => st.id === estimate.sinkTap)
      if (sinkTapData) total += sinkTapData.price
    }
    
    if (estimate.appliances) {
      const applianceData = appliancesOptions.find(a => a.id === estimate.appliances)
      if (applianceData) total += applianceData.price
    }
    
    if (estimate.installation) {
      const installationData = installationOptions.find(i => i.id === estimate.installation)
      if (installationData) total += installationData.price
    }
    
    return total
  }

  const totalSteps = 7
  const progress = (step / totalSteps) * 100

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  const getStepTitle = () => {
    switch (step) {
      case 1: return 'Choose Your Collection'
      case 2: return 'Select Kitchen Size'
      case 3: return 'Choose Worktops'
      case 4: return 'Select Sink & Tap'
      case 5: return 'Choose Appliances'
      case 6: return 'Installation Options'
      case 7: return 'Your Estimate'
      default: return ''
    }
  }

  const canProceed = () => {
    switch (step) {
      case 1: return estimate.collection !== null
      case 2: return estimate.size !== null
      case 3: return estimate.worktop !== null
      case 4: return estimate.sinkTap !== null
      case 5: return estimate.appliances !== null
      case 6: return estimate.installation !== null
      case 7: return true
      default: return false
    }
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(price)
  }

  const OptionCard = ({ 
    selected, 
    onClick, 
    name, 
    description, 
    priceLabel 
  }: { 
    selected: boolean
    onClick: () => void
    name: string
    description: string
    priceLabel?: string
  }) => (
    <button
      onClick={onClick}
      className={`w-full text-left p-5 md:p-6 rounded-2xl border transition-all duration-300 ${
        selected
          ? 'bg-[#D97A43]/20 border-[#D97A43] shadow-lg'
          : 'bg-[#EEE7D2]/5 border-[#EEE7D2]/15 hover:bg-[#EEE7D2]/10 hover:border-[#EEE7D2]/30'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="text-[#EEE7D2] mb-1" style={{ fontFamily: 'Parkinsans, sans-serif' }}>
            {name}
          </div>
          <div className="text-sm text-[#EEE7D2]/60 font-light" style={{ fontFamily: 'Figtree, sans-serif' }}>
            {description}
          </div>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          {priceLabel && (
            <span className="text-sm text-[#A88864]" style={{ fontFamily: 'Figtree, sans-serif' }}>
              {priceLabel}
            </span>
          )}
          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
            selected ? 'border-[#D97A43] bg-[#D97A43]' : 'border-[#EEE7D2]/30'
          }`}>
            {selected && <Check className="w-3.5 h-3.5 text-[#EEE7D2]" />}
          </div>
        </div>
      </div>
    </button>
  )

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-3 md:space-y-4">
            {collections.map(c => (
              <OptionCard
                key={c.id}
                selected={estimate.collection === c.id}
                onClick={() => setEstimate({ ...estimate, collection: c.id })}
                name={c.name}
                description={c.description}
                priceLabel={`From ${formatPrice(c.basePrice)}`}
              />
            ))}
          </div>
        )
      case 2:
        return (
          <div className="space-y-3 md:space-y-4">
            {sizes.map(s => (
              <OptionCard
                key={s.id}
                selected={estimate.size === s.id}
                onClick={() => setEstimate({ ...estimate, size: s.id })}
                name={s.name}
                description={s.description}
                priceLabel={`x${s.multiplier}`}
              />
            ))}
          </div>
        )
      case 3:
        return (
          <div className="space-y-3 md:space-y-4">
            {worktops.map(w => (
              <OptionCard
                key={w.id}
                selected={estimate.worktop === w.id}
                onClick={() => setEstimate({ ...estimate, worktop: w.id })}
                name={w.name}
                description={w.description}
                priceLabel={formatPrice(w.price)}
              />
            ))}
          </div>
        )
      case 4:
        return (
          <div className="space-y-3 md:space-y-4">
            {sinkTaps.map(st => (
              <OptionCard
                key={st.id}
                selected={estimate.sinkTap === st.id}
                onClick={() => setEstimate({ ...estimate, sinkTap: st.id })}
                name={st.name}
                description={st.description}
                priceLabel={formatPrice(st.price)}
              />
            ))}
          </div>
        )
      case 5:
        return (
          <div className="space-y-3 md:space-y-4">
            {appliancesOptions.map(a => (
              <OptionCard
                key={a.id}
                selected={estimate.appliances === a.id}
                onClick={() => setEstimate({ ...estimate, appliances: a.id })}
                name={a.name}
                description={a.description}
                priceLabel={a.price === 0 ? 'Included' : formatPrice(a.price)}
              />
            ))}
          </div>
        )
      case 6:
        return (
          <div className="space-y-3 md:space-y-4">
            {installationOptions.map(i => (
              <OptionCard
                key={i.id}
                selected={estimate.installation === i.id}
                onClick={() => setEstimate({ ...estimate, installation: i.id })}
                name={i.name}
                description={i.description}
                priceLabel={i.price === 0 ? 'Free' : formatPrice(i.price)}
              />
            ))}
          </div>
        )
      case 7:
        const total = calculatePrice()
        const collectionData = collections.find(c => c.id === estimate.collection)
        const sizeData = sizes.find(s => s.id === estimate.size)
        const worktopData = worktops.find(w => w.id === estimate.worktop)
        const sinkTapData = sinkTaps.find(st => st.id === estimate.sinkTap)
        const applianceData = appliancesOptions.find(a => a.id === estimate.appliances)
        const installationData = installationOptions.find(i => i.id === estimate.installation)
        const cabinetryPrice = collectionData && sizeData ? collectionData.basePrice * sizeData.multiplier : 0

        return (
          <div className="space-y-6">
            {/* Total Price */}
            <div className="text-center py-6 md:py-8">
              <p className="text-sm text-[#EEE7D2]/60 mb-2 uppercase tracking-wider" style={{ fontFamily: 'Figtree, sans-serif' }}>
                Estimated Total
              </p>
              <div className="text-5xl md:text-6xl text-[#EEE7D2]" style={{ fontFamily: 'Parkinsans, sans-serif', fontWeight: 300 }}>
                {formatPrice(total)}
              </div>
              <p className="text-xs text-[#EEE7D2]/40 mt-3" style={{ fontFamily: 'Figtree, sans-serif' }}>
                *This is an indicative estimate. Final pricing may vary based on site survey.
              </p>
            </div>

            {/* Breakdown */}
            <div className="space-y-3 bg-[#EEE7D2]/5 rounded-2xl p-5 md:p-6 border border-[#EEE7D2]/10">
              <h4 className="text-sm text-[#EEE7D2]/50 uppercase tracking-wider mb-4" style={{ fontFamily: 'Figtree, sans-serif' }}>
                Breakdown
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[#EEE7D2]/80 text-sm font-light">
                    {collectionData?.name} Cabinetry ({sizeData?.name})
                  </span>
                  <span className="text-[#EEE7D2] text-sm">{formatPrice(cabinetryPrice)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#EEE7D2]/80 text-sm font-light">
                    {worktopData?.name} Worktop
                  </span>
                  <span className="text-[#EEE7D2] text-sm">{formatPrice(worktopData?.price || 0)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#EEE7D2]/80 text-sm font-light">
                    {sinkTapData?.name} Sink & Tap
                  </span>
                  <span className="text-[#EEE7D2] text-sm">{formatPrice(sinkTapData?.price || 0)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#EEE7D2]/80 text-sm font-light">
                    {applianceData?.name}
                  </span>
                  <span className="text-[#EEE7D2] text-sm">{formatPrice(applianceData?.price || 0)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#EEE7D2]/80 text-sm font-light">
                    {installationData?.name}
                  </span>
                  <span className="text-[#EEE7D2] text-sm">{formatPrice(installationData?.price || 0)}</span>
                </div>
                <div className="border-t border-[#EEE7D2]/15 pt-3 mt-3 flex justify-between items-center">
                  <span className="text-[#EEE7D2]" style={{ fontFamily: 'Parkinsans, sans-serif' }}>Total</span>
                  <span className="text-[#D97A43] text-lg" style={{ fontFamily: 'Parkinsans, sans-serif' }}>{formatPrice(total)}</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Button
                onClick={onOpenConsultation}
                className="w-full bg-[#D97A43] text-[#EEE7D2] hover:bg-[#D97A43]/90 transition-all duration-300 px-8 py-6 rounded-full group text-base"
              >
                Book a Free Consultation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-center text-xs text-[#EEE7D2]/40 mt-3">
                No obligation. Speak with a designer about your project.
              </p>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  const stepLabels = ['Collection', 'Size', 'Worktops', 'Sink & Tap', 'Appliances', 'Install', 'Estimate']

  return (
    null
  )
}
