import { ref, computed } from 'vue'
import { Locale } from '~/composables/useLocales'

interface BlogDate {
  day: string
  month: string
}

export interface BlogPost {
  id: number
  date: BlogDate
  title: string
  author: string
  category: string
  excerpt: string
  slug: string
  fullContent: string
}

interface BlogPostsData {
  [key in Locale]?: BlogPost[]
}

const blogPostsData: Record<Locale, BlogPost[]> = {
  zh: [
    {
      id: 1,
      date: { day: '06', month: '1 月' },
      title: '恶作剧：定义、后果与法律界定',
      author: 'seagod',
      category: 'Uncategorized',
      excerpt: '恶作剧通常指的是出于娱乐或...',
      slug: 'mischief-definition-consequences',
      fullContent: `
        <h2>恶作剧的定义</h2>
        <p>恶作剧通常指的是出于娱乐或恶意目的，故意损坏他人财产或干扰他人正常生活的行为。在加拿大刑法中，恶作剧被视为一种犯罪行为，可能会导致严重的法律后果。</p>
        
        <h3>恶作剧的类型</h3>
        <ul>
          <li>故意损坏或破坏财产</li>
          <li>干扰他人对财产的合法使用</li>
          <li>阻碍、中断或干扰任何人的合法使用、享受或操作财产</li>
        </ul>

        <h3>法律后果</h3>
        <p>根据《加拿大刑法典》第430条，恶作剧罪的处罚取决于财产损失的价值和行为的性质。可能的后果包括：</p>
        <ul>
          <li>罚款</li>
          <li>缓刑</li>
          <li>监禁（最高可达10年，取决于案件严重程度）</li>
          <li>犯罪记录</li>
        </ul>

        <h3>如何应对恶作剧指控</h3>
        <p>如果您面临恶作剧指控，立即寻求专业法律帮助至关重要。我们的律师团队可以帮助您：</p>
        <ul>
          <li>评估指控的严重性</li>
          <li>制定有效的辩护策略</li>
          <li>在法庭上代表您的利益</li>
          <li>争取最佳结果，可能包括撤销指控或减轻处罚</li>
        </ul>
      `
    },
    {
      id: 2,
      date: { day: '06', month: '1 月' },
      title: '诈骗：定义、后果与防范',
      author: 'seagod',
      category: '加拿大法',
      excerpt: '诈骗是指任何故意欺骗行为，旨...',
      slug: 'fraud-definition-consequences',
      fullContent: `
        <h2>诈骗的定义</h2>
        <p>诈骗是指任何故意欺骗行为，旨在获取不正当利益或造成他人损失。在加拿大，诈骗是一项严重的刑事犯罪，受《刑法典》第380条的管辖。</p>

        <h3>常见的诈骗类型</h3>
        <ul>
          <li>身份盗窃</li>
          <li>信用卡诈骗</li>
          <li>投资诈骗</li>
          <li>保险诈骗</li>
          <li>网络诈骗</li>
          <li>商业诈骗</li>
        </ul>

        <h3>诈骗罪的后果</h3>
        <p>诈骗罪的处罚取决于涉案金额和案件的复杂程度：</p>
        <ul>
          <li>涉案金额超过$5,000：可能面临最高14年监禁</li>
          <li>涉案金额不超过$5,000：可能面临最高2年监禁</li>
          <li>永久性犯罪记录</li>
          <li>经济赔偿</li>
          <li>对未来就业和信用的影响</li>
        </ul>

        <h3>如何防范诈骗</h3>
        <ul>
          <li>保护个人信息</li>
          <li>验证通信来源</li>
          <li>对"好得令人难以置信"的优惠保持警惕</li>
          <li>定期检查财务报表</li>
          <li>使用安全的在线支付方式</li>
        </ul>

        <h3>面临诈骗指控时的应对</h3>
        <p>诈骗案件往往复杂且涉及大量证据。如果您面临诈骗指控，我们的律师团队将为您提供：</p>
        <ul>
          <li>详细的案件分析</li>
          <li>证据审查和质疑</li>
          <li>专业的辩护策略</li>
          <li>与检察官的谈判</li>
        </ul>
      `
    },
    {
      id: 3,
      date: { day: '06', month: '1 月' },
      title: '危险驾驶：定义、后果与防范',
      author: 'seagod',
      category: '加拿大法',
      excerpt: '危险驾驶是指以可能对公共...',
      slug: 'dangerous-driving-definition',
      fullContent: `
        <h2>危险驾驶的定义</h2>
        <p>危险驾驶是指以可能对公共安全构成威胁的方式操作机动车辆。根据《加拿大刑法典》第320.13条，这是一项严重的刑事犯罪。</p>

        <h3>什么构成危险驾驶</h3>
        <ul>
          <li>严重超速</li>
          <li>危险超车</li>
          <li>闯红灯或停车标志</li>
          <li>街头赛车</li>
          <li>在恶劣天气或路况下不当驾驶</li>
          <li>鲁莽驾驶行为</li>
        </ul>

        <h3>法律后果</h3>
        <p>危险驾驶的处罚可能非常严重：</p>
        <ul>
          <li>最高10年监禁（如果造成人身伤害，最高可达14年）</li>
          <li>如果造成死亡，最高可判处终身监禁</li>
          <li>驾驶执照吊销</li>
          <li>犯罪记录</li>
          <li>高额罚款</li>
          <li>保险费用大幅增加</li>
        </ul>

        <h3>与危险驾驶相关的其他指控</h3>
        <ul>
          <li>鲁莽驾驶</li>
          <li>街头赛车</li>
          <li>导致人身伤害的危险驾驶</li>
          <li>导致死亡的危险驾驶</li>
        </ul>

        <h3>辩护策略</h3>
        <p>面对危险驾驶指控，可能的辩护策略包括：</p>
        <ul>
          <li>质疑驾驶行为的"危险"程度</li>
          <li>检查证据的合法性</li>
          <li>证人证词的可靠性</li>
          <li>道路和天气条件的考虑</li>
        </ul>

        <p>我们的律师团队在处理危险驾驶案件方面拥有丰富经验，将为您提供专业的法律辩护。</p>
      `
    },
    {
      id: 4,
      date: { day: '06', month: '1 月' },
      title: '小额盗窃：概念与后果',
      author: 'seagod',
      category: '加拿大法',
      excerpt: '小额盗窃，通常指的是偷窃...',
      slug: 'petty-theft-concept-consequences',
      fullContent: `
        <h2>小额盗窃的定义</h2>
        <p>小额盗窃，通常指的是偷窃价值不超过$5,000的财产。虽然被称为"小额"，但这仍然是一项严重的刑事犯罪，可能对您的未来产生长期影响。</p>

        <h3>常见的小额盗窃情况</h3>
        <ul>
          <li>商店盗窃（shoplifting）</li>
          <li>办公室或工作场所盗窃</li>
          <li>从车辆中盗窃物品</li>
          <li>盗窃个人财物</li>
        </ul>

        <h3>法律后果</h3>
        <p>根据《加拿大刑法典》第334条，小额盗窃的处罚包括：</p>
        <ul>
          <li>最高2年监禁（如果以起诉方式处理）</li>
          <li>最高$5,000罚款或6个月监禁（如果以简易程序处理）</li>
          <li>犯罪记录</li>
          <li>缓刑</li>
          <li>社区服务</li>
        </ul>

        <h3>犯罪记录的长期影响</h3>
        <p>即使是小额盗窃的犯罪记录也可能影响：</p>
        <ul>
          <li>就业机会</li>
          <li>教育机会</li>
          <li>旅行能力（特别是进入美国）</li>
          <li>住房申请</li>
          <li>专业执照和认证</li>
        </ul>

        <h3>初犯与累犯</h3>
        <p>初次犯罪者可能有资格获得：</p>
        <ul>
          <li>转移计划（diversion programs）</li>
          <li>和解选项</li>
          <li>较轻的处罚</li>
        </ul>
        <p>然而，累犯将面临更严厉的处罚。</p>

        <h3>辩护选项</h3>
        <p>我们的律师可以帮助您：</p>
        <ul>
          <li>争取撤销指控</li>
          <li>协商减轻处罚</li>
          <li>探索替代解决方案</li>
          <li>保护您的记录</li>
          <li>在法庭上有效辩护</li>
        </ul>
      `
    },
    {
      id: 5,
      date: { day: '06', month: '1 月' },
      title: '加拿大家庭暴力与袭击法律详解',
      author: 'seagod',
      category: '袭击罪',
      excerpt: '家庭暴力与袭击在加拿大法律中的定义 加拿...',
      slug: 'domestic-violence-assault-canada',
      fullContent: `
        <h2>家庭暴力与袭击在加拿大法律中的定义</h2>
        <p>加拿大法律对家庭暴力和袭击采取零容忍态度。这些指控可能会对您的生活产生深远影响，包括失去与子女的接触、失去住所，以及获得犯罪记录。</p>

        <h3>袭击罪的类型</h3>
        <p>在加拿大刑法中，袭击罪分为几个级别：</p>
        <ul>
          <li><strong>普通袭击</strong>（第266条）：最轻微的形式，包括威胁或轻微身体接触</li>
          <li><strong>武器袭击或造成身体伤害的袭击</strong>（第267条）：涉及武器或造成实际伤害</li>
          <li><strong>严重袭击</strong>（第268条）：造成严重身体伤害、毁容或危及生命</li>
          <li><strong>性侵犯</strong>（第271-273条）：未经同意的性接触</li>
        </ul>

        <h3>家庭暴力的特殊考虑</h3>
        <p>当袭击发生在家庭成员之间时，可能涉及额外的法律后果：</p>
        <ul>
          <li>禁止接触令</li>
          <li>被要求离开家庭住所</li>
          <li>影响子女监护权</li>
          <li>更严厉的保释条件</li>
          <li>可能面临更长的监禁刑期</li>
        </ul>

        <h3>处罚</h3>
        <p>袭击罪的处罚取决于严重程度：</p>
        <ul>
          <li><strong>普通袭击</strong>：最高5年监禁</li>
          <li><strong>武器袭击</strong>：最高10年监禁</li>
          <li><strong>严重袭击</strong>：最高14年监禁</li>
        </ul>

        <h3>辩护策略</h3>
        <p>面对家庭暴力或袭击指控，可能的辩护包括：</p>
        <ul>
          <li>自卫</li>
          <li>保护他人</li>
          <li>缺乏意图</li>
          <li>虚假指控</li>
          <li>同意（在某些情况下）</li>
          <li>质疑证据的可靠性</li>
        </ul>

        <h3>保释和禁止接触令</h3>
        <p>在家庭暴力案件中，被告通常会面临严格的保释条件，包括：</p>
        <ul>
          <li>不得接触受害人</li>
          <li>不得前往特定地点</li>
          <li>交出护照</li>
          <li>定期向警方报到</li>
        </ul>

        <p>我们的律师团队理解这些案件的敏感性，将为您提供同情心和专业知识相结合的法律服务。</p>
      `
    },
    {
      id: 6,
      date: { day: '27', month: '12 月' },
      title: '新的道路交通法规定：分心驾驶处罚加重，持牌司机面临更严格惩罚',
      author: 'seagod',
      category: '分心驾驶',
      excerpt: '新的道路交通法针对不同级别的驾照持有者设...',
      slug: 'new-distracted-driving-laws',
      fullContent: `
        <h2>新的道路交通法规定</h2>
        <p>新的道路交通法针对不同级别的驾照持有者设定了更严格的分心驾驶处罚标准。这些变化旨在减少因使用手机和其他电子设备而导致的交通事故。</p>

        <h3>什么是分心驾驶</h3>
        <p>分心驾驶包括在驾驶时：</p>
        <ul>
          <li>使用手持无线通信设备（手机、平板电脑）</li>
          <li>查看或使用娱乐显示屏</li>
          <li>手持或使用电子娱乐设备</li>
          <li>编程GPS（除非在合法固定位置）</li>
        </ul>

        <h3>针对不同驾照级别的处罚</h3>
        
        <h4>G牌全照持有者（Full License）</h4>
        <ul>
          <li><strong>第一次违规</strong>：罚款$615-$1,000，扣3分，暂停驾照3天</li>
          <li><strong>第二次违规</strong>：罚款$615-$2,000，扣6分，暂停驾照7天</li>
          <li><strong>第三次及以上违规</strong>：罚款$615-$3,000，扣6分，暂停驾照30天</li>
        </ul>

        <h4>新手驾照（G1, G2, M1, M2）持有者</h4>
        <ul>
          <li><strong>第一次违规</strong>：罚款$615-$1,000，暂停驾照30天</li>
          <li><strong>第二次违规</strong>：罚款$615-$2,000，暂停驾照90天</li>
          <li><strong>第三次及以上违规</strong>：取消驾照，需要重新测试</li>
        </ul>

        <h4>A至E级商业驾照持有者</h4>
        <p>商业驾驶员面临与G牌全照持有者相同的处罚，但违规记录可能影响其商业驾驶资格。</p>

        <h3>豁免情况</h3>
        <p>在以下情况下，驾驶员可以使用电子设备：</p>
        <ul>
          <li>拨打911报告紧急情况</li>
          <li>设备以免提方式安全固定</li>
          <li>在完全停车且不在道路上时</li>
        </ul>

        <h3>如何对抗分心驾驶罚单</h3>
        <p>如果您收到分心驾驶罚单，我们可以帮助您：</p>
        <ul>
          <li>审查罚单的合法性</li>
          <li>质疑执法程序</li>
          <li>收集证据支持您的案件</li>
          <li>在法庭上代表您</li>
          <li>争取减轻或撤销处罚</li>
        </ul>

        <h3>为什么要对抗罚单</h3>
        <ul>
          <li>避免扣分和保险费增加</li>
          <li>防止驾照暂停</li>
          <li>保护您的驾驶记录</li>
          <li>避免累积违规导致更严重后果</li>
        </ul>
      `
    },
    {
      id: 7,
      date: { day: '27', month: '12 月' },
      title: '加重醉驾处罚: 应对大麻合法化后的不清醒驾驶挑战',
      author: 'seagod',
      category: '酒驾',
      excerpt: '在大麻合法化之后，无论是喝酒还是摄入大麻...',
      slug: 'impaired-driving-cannabis-laws',
      fullContent: `
        <h2>加重醉驾处罚：应对大麻合法化后的不清醒驾驶挑战</h2>
        <p>在大麻合法化之后，无论是喝酒还是摄入大麻后驾驶，都会面临严重的法律后果。加拿大政府已经实施了更严格的不清醒驾驶法律，以应对这一新挑战。</p>

        <h3>酒精和大麻的法定限制</h3>
        
        <h4>酒精限制</h4>
        <ul>
          <li><strong>警告范围</strong>：血液酒精浓度（BAC）0.05-0.079</li>
          <li><strong>刑事犯罪</strong>：BAC 0.08或以上</li>
        </ul>

        <h4>大麻限制</h4>
        <ul>
          <li><strong>2纳克/毫升血液</strong>：最低刑事限制</li>
          <li><strong>5纳克/毫升或以上</strong>：更严重的处罚</li>
          <li><strong>酒精和大麻混合</strong>：BAC 0.05 + 2.5纳克THC</li>
        </ul>

        <h3>处罚等级</h3>

        <h4>第一次违规</h4>
        <ul>
          <li>最低罚款$1,000</li>
          <li>驾照暂停至少1年</li>
          <li>可能的监禁（最高10年）</li>
          <li>犯罪记录</li>
          <li>强制安装点火互锁装置</li>
        </ul>

        <h4>第二次违规</h4>
        <ul>
          <li>最低30天监禁</li>
          <li>驾照暂停至少3年</li>
          <li>更高罚款</li>
          <li>更长的点火互锁要求</li>
        </ul>

        <h4>第三次及以上违规</h4>
        <ul>
          <li>最低120天监禁</li>
          <li>驾照暂停至少6年（可能终身）</li>
          <li>可能被判处最高10年监禁</li>
        </ul>

        <h3>造成身体伤害或死亡</h3>
        <p>如果不清醒驾驶导致他人受伤或死亡，后果将极其严重：</p>
        <ul>
          <li><strong>造成身体伤害</strong>：最高14年监禁</li>
          <li><strong>造成死亡</strong>：最高终身监禁</li>
        </ul>

        <h3>路边检测</h3>
        <p>警方现在配备了：</p>
        <ul>
          <li>呼吸测试仪（酒精检测）</li>
          <li>唾液检测设备（大麻检测）</li>
          <li>标准现场清醒测试（SFST）</li>
          <li>药物识别专家（DRE）评估</li>
        </ul>

        <h3>强制性酒精筛查（MAS）</h3>
        <p>自2018年以来，警方有权要求任何合法停车的驾驶员进行呼吸测试，即使没有可疑迹象。拒绝测试本身就是犯罪行为。</p>

        <h3>拒绝提供呼吸样本</h3>
        <p>拒绝或未能提供呼吸、血液或唾液样本的处罚与不清醒驾驶相同：</p>
        <ul>
          <li>第一次：最低罚款$2,000</li>
          <li>第二次：最低30天监禁</li>
          <li>第三次：最低120天监禁</li>
        </ul>

        <h3>辩护策略</h3>
        <p>面对不清醒驾驶指控，可能的辩护包括：</p>
        <ul>
          <li>质疑呼吸或药物测试的准确性</li>
          <li>检查警方程序的合法性</li>
          <li>《权利宪章》违规</li>
          <li>证据链问题</li>
          <li>校准和维护记录</li>
          <li>合理疑点辩护</li>
        </ul>

        <h3>为什么需要专业法律援助</h3>
        <p>不清醒驾驶案件涉及：</p>
        <ul>
          <li>复杂的科学证据</li>
          <li>严格的程序要求</li>
          <li>宪法权利问题</li>
          <li>严重的长期后果</li>
        </ul>

        <p>我们的律师团队在不清醒驾驶案件方面拥有丰富经验，包括酒精和大麻相关案件。我们将全力保护您的权利，争取最佳结果。</p>
      `
    }
  ],
  en: [
    {
      id: 1,
      date: { day: '06', month: 'Jan' },
      title: 'Mischief: Definition, Consequences & Legal Boundaries',
      author: 'seagod',
      category: 'Uncategorized',
      excerpt: 'Mischief generally refers to acts intended for amusement or...',
      slug: 'mischief-definition-consequences',
      fullContent: `
        <h2>Definition of Mischief</h2>
        <p>Mischief generally refers to acts intended for amusement or malicious purposes that deliberately damage others' property or interfere with their normal life. Under Canadian criminal law, mischief is considered a criminal offense that can lead to serious legal consequences.</p>
        
        <h3>Types of Mischief</h3>
        <ul>
          <li>Willful damage or destruction of property</li>
          <li>Interference with lawful use of property</li>
          <li>Obstructing, interrupting, or interfering with any person's lawful use, enjoyment, or operation of property</li>
        </ul>

        <h3>Legal Consequences</h3>
        <p>Under Section 430 of the Criminal Code of Canada, penalties for mischief depend on the value of property loss and nature of the act. Potential consequences include:</p>
        <ul>
          <li>Fines</li>
          <li>Probation</li>
          <li>Imprisonment (up to 10 years depending on severity)</li>
          <li>Criminal record</li>
        </ul>

        <h3>Responding to Mischief Charges</h3>
        <p>If you face mischief charges, seeking professional legal help immediately is crucial. Our legal team can help you:</p>
        <ul>
          <li>Assess the severity of charges</li>
          <li>Develop effective defense strategies</li>
          <li>Represent your interests in court</li>
          <li>Pursue the best outcome, potentially including charge withdrawal or reduced penalties</li>
        </ul>
      `
    },
    {
      id: 2,
      date: { day: '06', month: 'Jan' },
      title: 'Fraud: Definition, Consequences & Prevention',
      author: 'seagod',
      category: 'Canadian Law',
      excerpt: 'Fraud refers to any deliberate deceptive act intended...',
      slug: 'fraud-definition-consequences',
      fullContent: `
        <h2>Definition of Fraud</h2>
        <p>Fraud refers to any deliberate deceptive act intended to secure unfair gain or cause loss to another. In Canada, fraud is a serious criminal offense governed by Section 380 of the Criminal Code.</p>

        <h3>Common Types of Fraud</h3>
        <ul>
          <li>Identity theft</li>
          <li>Credit card fraud</li>
          <li>Investment fraud</li>
          <li>Insurance fraud</li>
          <li>Cybercrime fraud</li>
          <li>Business fraud</li>
        </ul>

        <h3>Consequences of Fraud</h3>
        <p>Penalties for fraud depend on the amount involved and complexity of the case:</p>
        <ul>
          <li>Amount exceeding $5,000: up to 14 years imprisonment</li>
          <li>Amount not exceeding $5,000: up to 2 years imprisonment</li>
          <li>Permanent criminal record</li>
          <li>Financial restitution</li>
          <li>Impact on future employment and credit</li>
        </ul>

        <h3>Fraud Prevention</h3>
        <ul>
          <li>Protect personal information</li>
          <li>Verify communication sources</li>
          <li>Be wary of "too good to be true" offers</li>
          <li>Regularly review financial statements</li>
          <li>Use secure online payment methods</li>
        </ul>

        <h3>Responding to Fraud Charges</h3>
        <p>Fraud cases are often complex and involve substantial evidence. If you face fraud charges, our legal team will provide:</p>
        <ul>
          <li>Detailed case analysis</li>
          <li>Evidence review and challenge</li>
          <li>Professional defense strategies</li>
          <li>Negotiation with prosecutors</li>
        </ul>
      `
    },
    {
      id: 3,
      date: { day: '06', month: 'Jan' },
      title: 'Dangerous Driving: Definition, Consequences & Prevention',
      author: 'seagod',
      category: 'Canadian Law',
      excerpt: 'Dangerous driving refers to operating a motor vehicle...',
      slug: 'dangerous-driving-definition',
      fullContent: `
        <h2>Definition of Dangerous Driving</h2>
        <p>Dangerous driving refers to operating a motor vehicle in a manner that may pose a threat to public safety. Under Section 320.13 of the Criminal Code of Canada, this is a serious criminal offense.</p>

        <h3>What Constitutes Dangerous Driving</h3>
        <ul>
          <li>Excessive speeding</li>
          <li>Dangerous passing</li>
          <li>Running red lights or stop signs</li>
          <li>Street racing</li>
          <li>Inappropriate driving in adverse weather or road conditions</li>
          <li>Reckless driving behavior</li>
        </ul>

        <h3>Legal Consequences</h3>
        <p>Penalties for dangerous driving can be severe:</p>
        <ul>
          <li>Up to 10 years imprisonment (up to 14 years if causing bodily harm)</li>
          <li>Up to life imprisonment if causing death</li>
          <li>Driver's license suspension</li>
          <li>Criminal record</li>
          <li>Substantial fines</li>
          <li>Significant insurance premium increases</li>
        </ul>

        <h3>Related Charges</h3>
        <ul>
          <li>Reckless driving</li>
          <li>Street racing</li>
          <li>Dangerous driving causing bodily harm</li>
          <li>Dangerous driving causing death</li>
        </ul>

        <h3>Defense Strategies</h3>
        <p>When facing dangerous driving charges, possible defense strategies include:</p>
        <ul>
          <li>Challenging the "dangerous" nature of the driving</li>
          <li>Examining the legality of evidence</li>
          <li>Witness testimony reliability</li>
          <li>Consideration of road and weather conditions</li>
        </ul>

        <p>Our legal team has extensive experience handling dangerous driving cases and will provide professional legal defense.</p>
      `
    },
    {
      id: 4,
      date: { day: '06', month: 'Jan' },
      title: 'Petty Theft: Concept & Consequences',
      author: 'seagod',
      category: 'Canadian Law',
      excerpt: 'Petty theft typically refers to the theft...',
      slug: 'petty-theft-concept-consequences',
      fullContent: `
        <h2>Definition of Petty Theft</h2>
        <p>Petty theft typically refers to the theft of property valued at no more than $5,000. Although called "petty," it remains a serious criminal offense that can have long-term impacts on your future.</p>

        <h3>Common Petty Theft Situations</h3>
        <ul>
          <li>Shoplifting</li>
          <li>Office or workplace theft</li>
          <li>Theft from vehicles</li>
          <li>Theft of personal property</li>
        </ul>

        <h3>Legal Consequences</h3>
        <p>Under Section 334 of the Criminal Code of Canada, penalties for petty theft include:</p>
        <ul>
          <li>Up to 2 years imprisonment (if prosecuted by indictment)</li>
          <li>Up to $5,000 fine or 6 months imprisonment (if proceeded by summary conviction)</li>
          <li>Criminal record</li>
          <li>Probation</li>
          <li>Community service</li>
        </ul>

        <h3>Long-term Impact of a Criminal Record</h3>
        <p>Even a petty theft criminal record can affect:</p>
        <ul>
          <li>Employment opportunities</li>
          <li>Educational opportunities</li>
          <li>Ability to travel (especially to the United States)</li>
          <li>Housing applications</li>
          <li>Professional licenses and certifications</li>
        </ul>

        <h3>First-time vs. Repeat Offenders</h3>
        <p>First-time offenders may be eligible for:</p>
        <ul>
          <li>Diversion programs</li>
          <li>Settlement options</li>
          <li>Reduced penalties</li>
        </ul>
        <p>However, repeat offenders face harsher penalties.</p>

        <h3>Defense Options</h3>
        <p>Our lawyers can help you:</p>
        <ul>
          <li>Seek charge withdrawal</li>
          <li>Negotiate reduced penalties</li>
          <li>Explore alternative resolutions</li>
          <li>Protect your record</li>
          <li>Provide effective court defense</li>
        </ul>
      `
    },
    {
      id: 5,
      date: { day: '06', month: 'Jan' },
      title: 'Domestic Violence & Assault Laws in Canada Explained',
      author: 'seagod',
      category: 'Assault',
      excerpt: 'Definition of domestic violence and assault in Canadian law...',
      slug: 'domestic-violence-assault-canada',
      fullContent: `
        <h2>Domestic Violence & Assault in Canadian Law</h2>
        <p>Canadian law takes a zero-tolerance approach to domestic violence and assault. These charges can have far-reaching impacts on your life, including loss of contact with children, loss of housing, and acquiring a criminal record.</p>

        <h3>Types of Assault Charges</h3>
        <p>Under Canadian criminal law, assault charges are categorized into several levels:</p>
        <ul>
          <li><strong>Common Assault</strong> (Section 266): The least serious form, including threats or minor physical contact</li>
          <li><strong>Assault with a Weapon or Causing Bodily Harm</strong> (Section 267): Involves weapons or causes actual harm</li>
          <li><strong>Aggravated Assault</strong> (Section 268): Causes serious bodily harm, disfigurement, or endangers life</li>
          <li><strong>Sexual Assault</strong> (Sections 271-273): Non-consensual sexual contact</li>
        </ul>

        <h3>Special Considerations for Domestic Violence</h3>
        <p>When assault occurs between family members, additional legal consequences may apply:</p>
        <ul>
          <li>No-contact orders</li>
          <li>Required to leave family residence</li>
          <li>Impact on child custody</li>
          <li>Stricter bail conditions</li>
          <li>Potentially longer imprisonment sentences</li>
        </ul>

        <h3>Penalties</h3>
        <p>Assault penalties depend on severity:</p>
        <ul>
          <li><strong>Common Assault</strong>: Up to 5 years imprisonment</li>
          <li><strong>Assault with Weapon</strong>: Up to 10 years imprisonment</li>
          <li><strong>Aggravated Assault</strong>: Up to 14 years imprisonment</li>
        </ul>

        <h3>Defense Strategies</h3>
        <p>When facing domestic violence or assault charges, possible defenses include:</p>
        <ul>
          <li>Self-defense</li>
          <li>Defense of others</li>
          <li>Lack of intent</li>
          <li>False allegations</li>
          <li>Consent (in certain circumstances)</li>
          <li>Challenging evidence reliability</li>
        </ul>

        <h3>Bail and No-Contact Orders</h3>
        <p>In domestic violence cases, defendants typically face strict bail conditions, including:</p>
        <ul>
          <li>No contact with the victim</li>
          <li>Stay away from specific locations</li>
          <li>Surrender passport</li>
          <li>Regular reporting to police</li>
        </ul>

        <p>Our legal team understands the sensitivity of these cases and will provide legal services combining compassion with expertise.</p>
      `
    },
    {
      id: 6,
      date: { day: '27', month: 'Dec' },
      title: 'New Traffic Laws: Stricter Distracted Driving Penalties for Licensed Drivers',
      author: 'seagod',
      category: 'Distracted Driving',
      excerpt: 'New traffic laws set stricter distracted driving penalty standards...',
      slug: 'new-distracted-driving-laws',
      fullContent: `
        <h2>New Traffic Law Provisions</h2>
        <p>New traffic laws have set stricter distracted driving penalty standards for different license levels. These changes aim to reduce traffic accidents caused by mobile phone and electronic device use.</p>

        <h3>What is Distracted Driving</h3>
        <p>Distracted driving includes while operating a vehicle:</p>
        <ul>
          <li>Using hand-held wireless communication devices (phones, tablets)</li>
          <li>Viewing or using entertainment displays</li>
          <li>Holding or using electronic entertainment devices</li>
          <li>Programming GPS (unless legally mounted)</li>
        </ul>

        <h3>Penalties by License Level</h3>
        
        <h4>Full License Holders (G)</h4>
        <ul>
          <li><strong>First Offense</strong>: $615-$1,000 fine, 3 demerit points, 3-day license suspension</li>
          <li><strong>Second Offense</strong>: $615-$2,000 fine, 6 demerit points, 7-day license suspension</li>
          <li><strong>Third+ Offense</strong>: $615-$3,000 fine, 6 demerit points, 30-day license suspension</li>
        </ul>

        <h4>Novice License Holders (G1, G2, M1, M2)</h4>
        <ul>
          <li><strong>First Offense</strong>: $615-$1,000 fine, 30-day license suspension</li>
          <li><strong>Second Offense</strong>: $615-$2,000 fine, 90-day license suspension</li>
          <li><strong>Third+ Offense</strong>: License cancellation, required retesting</li>
        </ul>

        <h4>Commercial License Holders (Classes A-E)</h4>
        <p>Commercial drivers face the same penalties as full G license holders, but violations may affect their commercial driving eligibility.</p>

        <h3>Exemptions</h3>
        <p>Drivers may use electronic devices when:</p>
        <ul>
          <li>Calling 911 to report emergencies</li>
          <li>Device is securely mounted hands-free</li>
          <li>Completely stopped and not on the roadway</li>
        </ul>

        <h3>Fighting a Distracted Driving Ticket</h3>
        <p>If you receive a distracted driving ticket, we can help you:</p>
        <ul>
          <li>Review ticket legality</li>
          <li>Challenge enforcement procedures</li>
          <li>Gather supporting evidence</li>
          <li>Represent you in court</li>
          <li>Seek reduced or withdrawn penalties</li>
        </ul>

        <h3>Why Fight the Ticket</h3>
        <ul>
          <li>Avoid demerit points and insurance increases</li>
          <li>Prevent license suspension</li>
          <li>Protect your driving record</li>
          <li>Avoid cumulative violations leading to more severe consequences</li>
        </ul>
      `
    },
    {
      id: 7,
      date: { day: '27', month: 'Dec' },
      title: 'Enhanced Impaired Driving Penalties: Post-Cannabis Legalization Challenges',
      author: 'seagod',
      category: 'Impaired Driving',
      excerpt: 'After cannabis legalization, whether alcohol or cannabis...',
      slug: 'impaired-driving-cannabis-laws',
      fullContent: `
        <h2>Enhanced Impaired Driving Penalties</h2>
        <p>After cannabis legalization, whether driving impaired by alcohol or cannabis, you face serious legal consequences. The Canadian government has implemented stricter impaired driving laws to address this new challenge.</p>

        <h3>Legal Limits for Alcohol and Cannabis</h3>
        
        <h4>Alcohol Limits</h4>
        <ul>
          <li><strong>Warning Range</strong>: Blood Alcohol Concentration (BAC) 0.05-0.079</li>
          <li><strong>Criminal Offense</strong>: BAC 0.08 or above</li>
        </ul>

        <h4>Cannabis Limits</h4>
        <ul>
          <li><strong>2 nanograms/ml blood</strong>: Minimum criminal threshold</li>
          <li><strong>5 nanograms/ml or above</strong>: More severe penalties</li>
          <li><strong>Alcohol and cannabis combined</strong>: BAC 0.05 + 2.5 nanograms THC</li>
        </ul>

        <h3>Penalty Levels</h3>

        <h4>First Offense</h4>
        <ul>
          <li>Minimum $1,000 fine</li>
          <li>License suspension for at least 1 year</li>
          <li>Possible imprisonment (up to 10 years)</li>
          <li>Criminal record</li>
          <li>Mandatory ignition interlock installation</li>
        </ul>

        <h4>Second Offense</h4>
        <ul>
          <li>Minimum 30 days imprisonment</li>
          <li>License suspension for at least 3 years</li>
          <li>Higher fines</li>
          <li>Longer ignition interlock requirements</li>
        </ul>

        <h4>Third and Subsequent Offenses</h4>
        <ul>
          <li>Minimum 120 days imprisonment</li>
          <li>License suspension for at least 6 years (possibly lifetime)</li>
          <li>Possible sentence up to 10 years imprisonment</li>
        </ul>

        <h3>Causing Bodily Harm or Death</h3>
        <p>If impaired driving causes injury or death, consequences are extremely serious:</p>
        <ul>
          <li><strong>Causing Bodily Harm</strong>: Up to 14 years imprisonment</li>
          <li><strong>Causing Death</strong>: Up to life imprisonment</li>
        </ul>

        <h3>Roadside Testing</h3>
        <p>Police are now equipped with:</p>
        <ul>
          <li>Breathalyzers (alcohol detection)</li>
          <li>Saliva testing devices (cannabis detection)</li>
          <li>Standardized Field Sobriety Tests (SFST)</li>
          <li>Drug Recognition Expert (DRE) evaluations</li>
        </ul>

        <h3>Mandatory Alcohol Screening (MAS)</h3>
        <p>Since 2018, police have authority to demand breath samples from any lawfully stopped driver, even without suspicion. Refusing the test is itself a criminal offense.</p>

        <h3>Refusing to Provide a Breath Sample</h3>
        <p>Penalties for refusing or failing to provide breath, blood, or saliva samples are the same as impaired driving:</p>
        <ul>
          <li>First time: Minimum $2,000 fine</li>
          <li>Second time: Minimum 30 days imprisonment</li>
          <li>Third time: Minimum 120 days imprisonment</li>
        </ul>

        <h3>Defense Strategies</h3>
        <p>When facing impaired driving charges, possible defenses include:</p>
        <ul>
          <li>Challenging accuracy of breath or drug tests</li>
          <li>Examining legality of police procedures</li>
          <li>Charter of Rights violations</li>
          <li>Chain of evidence issues</li>
          <li>Calibration and maintenance records</li>
          <li>Reasonable doubt defense</li>
        </ul>

        <h3>Why Professional Legal Help is Needed</h3>
        <p>Impaired driving cases involve:</p>
        <ul>
          <li>Complex scientific evidence</li>
          <li>Strict procedural requirements</li>
          <li>Constitutional rights issues</li>
          <li>Serious long-term consequences</li>
        </ul>

        <p>Our legal team has extensive experience with impaired driving cases, including both alcohol and cannabis-related matters. We will protect your rights and pursue the best possible outcome.</p>
      `
    }
  ],
  en: [
    // English blog posts are not yet available for all locales.
  ],
  ko: [],
  vi: []
}

/**
 * Composable for managing and accessing blog posts data
 * Provides functions to retrieve all posts or find specific posts by slug and language
 */
export const useBlogPosts = () => {
  /**
   * Get all blog posts for a specific language
   * @param lang - Language code ('en' or 'zh')
   * @returns Array of blog posts for the specified language
   */
  const getAllPosts = (lang: Locale = 'en'): BlogPost[] => {
    return blogPostsData[lang] || blogPostsData['en'] || []
  }

  /**
   * Get a specific blog post by slug and language
   * @param slug - The blog post slug
   * @param lang - Language code ('en', 'zh', 'ko', or 'vi')
   * @returns The blog post object if found, null otherwise
   */
  const getPostBySlug = (slug: string, lang: Locale = 'en'): BlogPost | null => {
    const posts = blogPostsData[lang] || blogPostsData['en'] || []
    return posts.find(post => post.slug === slug) || null
  }

  /**
   * Get a blog post by ID and language
   * @param id - The blog post ID
   * @param lang - Language code ('en', 'zh', 'ko', or 'vi')
   * @returns The blog post object if found, null otherwise
   */
  const getPostById = (id: number, lang: Locale = 'en'): BlogPost | null => {
    const posts = blogPostsData[lang] || blogPostsData['en'] || []
    return posts.find(post => post.id === id) || null
  }

  /**
   * Get the total count of blog posts for a language
   * @param lang - Language code ('en', 'zh', 'ko', or 'vi')
   * @returns Number of blog posts
   */
  const getPostCount = (lang: Locale = 'en'): number => {
    return blogPostsData[lang]?.length || blogPostsData['en']?.length || 0
  }

  return {
    getAllPosts,
    getPostBySlug,
    getPostById,
    getPostCount
  }
}
