<script setup>
import { useI18n } from 'vue-i18n'
const { t,locale } = useI18n()

const props = defineProps({
  currentLang: {
    type: String,
    default: 'zh'
  }
})

const expandedItems = ref([0])

const faqContentByLocale = {
  en: [
    {
      question: 'Will a lawyer or legal assistant handle my case?',
      answer: 'Our experienced lawyers personally oversee all cases. While legal assistants may provide support, your case will have direct attorney involvement throughout the legal process.'
    },
    {
      question: 'How many criminal cases have you handled?',
      answer: 'We have extensive experience handling thousands of criminal cases across various jurisdictions. Our track record demonstrates success in diverse legal matters including DUI, domestic violence, fraud, and traffic violations.'
    },
    {
      question: 'How long does the process take?',
      answer: 'Sometimes we can withdraw a case on the first court date or within 2-3 appearances. Other cases may take months or even years to resolve. Before retaining us, we will always provide you with our best estimate of completion time.'
    }
  ],
  ko: [
    {
      question: '변호사 또는 법률 보조원이 제 사건을 처리하나요?',
      answer: '저희 경험 많은 변호사들이 모든 사건을 직접 감독합니다. 법률 보조원이 지원을 제공할 수 있지만, 사건 전반에 걸쳐 변호사가 직접 참여합니다.'
    },
    {
      question: '지금까지 얼마나 많은 형사 사건을 처리했나요?',
      answer: '저희는 다양한 관할 구역에서 수천 건의 형사 사건을 처리한 풍부한 경험이 있습니다. DUI, 가정 폭력, 사기, 교통 위반 등 다양한 법률 분야에서 성과를 입증했습니다.'
    },
    {
      question: '이 과정은 얼마나 걸리나요?',
      answer: '일부 사건은 첫 재판일이나 2~3회 출석 이내에 종결될 수 있습니다. 다른 사건은 해결까지 몇 개월 또는 몇 년이 걸릴 수 있습니다. 계약 전에 완료 예상 기간을 항상 안내해 드립니다.'
    }
  ],
  vi: [
    {
      question: 'Luật sư hay trợ lý pháp lý sẽ xử lý vụ án của tôi?',
      answer: 'Các luật sư giàu kinh nghiệm của chúng tôi giám sát trực tiếp mọi vụ án. Mặc dù trợ lý pháp lý có thể hỗ trợ, nhưng vụ án của bạn sẽ luôn có sự tham gia trực tiếp của luật sư trong suốt quy trình pháp lý.'
    },
    {
      question: 'Bạn đã xử lý bao nhiêu vụ án hình sự?',
      answer: 'Chúng tôi có kinh nghiệm sâu rộng khi xử lý hàng nghìn vụ án hình sự ở nhiều khu vực pháp lý khác nhau. Thành tích của chúng tôi chứng minh thành công trong nhiều vấn đề pháp lý đa dạng bao gồm DUI, bạo lực gia đình, gian lận và vi phạm giao thông.'
    },
    {
      question: 'Quá trình mất bao lâu?',
      answer: 'Đôi khi chúng tôi có thể rút vụ án vào ngày tòa đầu tiên hoặc trong 2-3 lần ra tòa. Những vụ khác có thể mất vài tháng hoặc thậm chí vài năm để giải quyết. Trước khi ký hợp đồng, chúng tôi luôn cung cấp ước tính thời gian hoàn tất tốt nhất.'
    }
  ],
  zh: [
    {
      question: '律师或律师助理会处理我的案件吗？',
      answer: '我们经验丰富的律师会亲自监督所有案件。虽然法律助理可能会提供支持，但您的案件将在整个法律程序中获得直接的律师参与。'
    },
    {
      question: '我们办理了多少刑事案件？',
      answer: '我们在各个司法管辖区处理过数千起刑事案件。我们的成功记录证明了在包括醉驾、家暴、诈骗和交通违规等多种法律事项中的成功。'
    },
    {
      question: '这个过程需要多长时间？',
      answer: '有时我们可以在第一次开庭日期（或在 2 – 3 次出庭内）撤回案件。其他案件则需要数月甚至数年才能解决。在保留之前，我们将始终为您提供完成时间的最佳估计。'
    }
  ]
}

const faqItems = computed(() => faqContentByLocale[locale.value] || faqContentByLocale.zh)

const toggleItem = (index) => {
  const idx = expandedItems.value.indexOf(index)
  if (idx > -1) {
    expandedItems.value.splice(idx, 1)
  } else {
    expandedItems.value.push(index)
  }
}
</script>

<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <div class="mb-12">
          <p class="text-lg text-gray-700 leading-relaxed mb-8">
            {{ t('faq.desc') }}
          </p>
        </div>

        <div class="space-y-6">
          <div
            v-for="(item, index) in faqItems"
            :key="index"
            class="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow"
          >
            <button
              @click="toggleItem(index)"
              class="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
            >
              <h3 class="text-lg font-semibold text-gray-900 text-left">
                {{ item.question }}
              </h3>
              <svg
                v-if="expandedItems.includes(index)"
                class="w-6 h-6 text-blue-600 flex-shrink-0 ml-4 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M7 15l5-5 5 5H7z" />
              </svg>
              <svg
                v-else
                class="w-6 h-6 text-blue-600 flex-shrink-0 ml-4 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </button>

            <div
              v-if="expandedItems.includes(index)"
              class="p-6 border-t border-gray-200"
            >
              <p class="text-gray-700 leading-relaxed">
                {{ item.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
