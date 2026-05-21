import { useI18n } from 'vue-i18n'
import { useHead } from '#app'
import { computed } from 'vue'
import { normalizeLocale } from '~/composables/useLocales'

export const useLocaleMeta = () => {
  const { locale } = useI18n()

  const metaData = {
    en: {
      title: 'York Consulting - Criminal Defense & Traffic Violations',
      description: 'Expert legal representation for criminal defense, DUI, traffic violations, impaired driving, domestic violence, assault, fraud, and dangerous driving cases in Toronto.',
      keywords: 'criminal defense lawyer, DUI lawyer Toronto, traffic violations, impaired driving defense, domestic violence lawyer, assault defense, fraud cases, dangerous driving, legal services Toronto, traffic ticket defense, criminal law attorney',
      ogTitle: 'York Consulting - Professional Legal Services',
      ogDescription: 'Expert legal representation for criminal defense, DUI, traffic violations, and more in Toronto.',
      lang: 'en',
      ogLocale: 'en_CA'
    },
    zh: {
      title: '稳胜刑事，告票，车险专门店 - 刑事辩护与交通违章',
      description: '专业的刑事辩护、醉驾、交通违规、酒后驾车、家暴、袭击、诈骗和危险驾驶案件的法律代理服务，服务多伦多地区。',
      keywords: '刑事辩护律师, 多伦多醉驾律师, 交通违章, 酒后驾车辩护, 家暴律师, 袭击辩护, 诈骗案件, 危险驾驶, 多伦多法律服务, 交通罚单辩护, 刑事法律师',
      ogTitle: '稳胜刑事，告票，车险专门店 - 专业法律服务',
      ogDescription: '专业的刑事辩护、醉驾、交通违规等法律代理服务，服务多伦多地区。',
      lang: 'zh',
      ogLocale: 'zh_CN'
    },
    ko: {
      title: 'York Consulting - 형사 변호 및 교통 위반',
      description: '토론토에서 형사 변호, DUI, 교통 위반, 가정 폭력, 사기 및 위험 운전 사례에 대한 전문 법률 서비스를 제공합니다.',
      keywords: '형사 변호사, DUI 변호사 토론토, 교통 위반, 음주 운전 변호, 법률 서비스',
      ogTitle: 'York Consulting - 전문 법률 서비스',
      ogDescription: '토론토에서 형사 변호, DUI 및 교통 위반에 대한 전문 법률 서비스를 제공합니다.',
      lang: 'ko',
      ogLocale: 'ko_KR'
    },
    vi: {
      title: 'York Consulting - Bào chữa hình sự & Vi phạm giao thông',
      description: 'Cung cấp dịch vụ pháp lý chuyên nghiệp cho bào chữa hình sự, DUI, vi phạm giao thông, bạo lực gia đình, lừa đảo và lái xe nguy hiểm tại Toronto.',
      keywords: 'luật sư hình sự, luật sư DUI Toronto, vi phạm giao thông, bào chữa lái xe say rượu, dịch vụ pháp lý',
      ogTitle: 'York Consulting - Dịch vụ pháp lý chuyên nghiệp',
      ogDescription: 'Cung cấp dịch vụ pháp lý chuyên nghiệp cho hình sự, DUI và vi phạm giao thông tại Toronto.',
      lang: 'vi',
      ogLocale: 'vi_VN'
    }
  }

  const currentLocale = computed<keyof typeof metaData>(() => normalizeLocale(locale.value) as keyof typeof metaData)

  useHead(() => {
    const meta = metaData[currentLocale.value]

    return {
      htmlAttrs: {
        lang: meta.lang
      },
      title: meta.title,
      meta: [
        { name: 'description', content: meta.description },
        { name: 'keywords', content: meta.keywords },
        { property: 'og:title', content: meta.ogTitle },
        { property: 'og:description', content: meta.ogDescription },
        { property: 'og:locale', content: meta.ogLocale },
        { property: 'og:locale:alternate', content: currentLocale.value === 'en' ? 'zh_CN' : 'en_CA' }
      ]
    }
  })
}
