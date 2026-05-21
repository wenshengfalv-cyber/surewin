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
  ko: [
    {
      id: 1,
      date: { day: '06', month: '1월' },
      title: '장난죄: 정의, 결과 및 법적 경계',
      author: 'seagod',
      category: '기타',
      excerpt: '장난죄는 일반적으로 오락이나 악의적 목적으로 다른 사람의 재산을 훼손하거나 생활을 방해하는 행위를 말합니다.',
      slug: 'mischief-definition-consequences',
      fullContent: `
        <h2>장난죄의 정의</h2>
        <p>장난죄는 일반적으로 오락이나 악의적 목적으로 다른 사람의 재산을 고의로 손상시키거나 다른 사람의 정상적인 생활을 방해하는 행위를 말합니다. 캐나다 형법에서는 장난죄를 범죄로 보고 있으며, 심각한 법적 결과를 초래할 수 있습니다.</p>
        
        <h3>장난죄의 유형</h3>
        <ul>
          <li>재산을 고의로 손상하거나 파괴하는 행위</li>
          <li>다른 사람이 재산을 합법적으로 사용하는 것을 방해하는 행위</li>
          <li>다른 사람의 재산에 대한 합법적인 사용, 향유 또는 운영을 방해하거나 중단시키는 행위</li>
        </ul>

        <h3>법적 결과</h3>
        <p>캐나다 형법 430조에 따르면, 장난죄의 처벌은 재산 손실의 가치와 행위의 성격에 따라 달라집니다. 가능한 결과에는 다음이 포함됩니다:</p>
        <ul>
          <li>벌금</li>
          <li>보호 관찰</li>
          <li>징역(사건의 심각성에 따라 최대 10년)</li>
          <li>범죄 기록</li>
        </ul>

        <h3>장난죄 혐의에 대응하는 방법</h3>
        <p>장난죄 혐의를 받으면 즉시 전문 법률 상담을 받는 것이 중요합니다. 저희 변호사 팀은 다음과 같은 도움을 제공합니다:</p>
        <ul>
          <li>혐의의 심각성 평가</li>
          <li>효과적인 방어 전략 수립</li>
          <li>법정에서 고객의 이익 대변</li>
          <li>혐의 취소 또는 형량 감면을 위한 최선의 결과 추구</li>
        </ul>
      `
    },
    {
      id: 2,
      date: { day: '06', month: '1월' },
      title: '사기죄: 정의, 결과 및 예방',
      author: 'seagod',
      category: '캐나다 법',
      excerpt: '사기죄는 다른 사람에게 불법적인 이익을 얻거나 손실을 가하려는 고의적인 기만 행위를 의미합니다.',
      slug: 'fraud-definition-consequences',
      fullContent: `
        <h2>사기죄의 정의</h2>
        <p>사기죄는 부당한 이익을 취하거나 타인에게 손해를 끼치기 위해 고의로 기만 행위를 하는 것을 의미합니다. 캐나다에서는 사기죄가 심각한 형사 범죄로 간주되며, 형법 380조의 적용을 받습니다.</p>

        <h3>일반적인 사기 유형</h3>
        <ul>
          <li>신원 도용</li>
          <li>신용카드 사기</li>
          <li>투자 사기</li>
          <li>보험 사기</li>
          <li>사이버 사기</li>
          <li>상업 사기</li>
        </ul>

        <h3>사기죄의 결과</h3>
        <p>사기죄의 처벌은 관련 금액과 사건의 복잡성에 따라 달라집니다:</p>
        <ul>
          <li>금액이 5,000달러를 초과하는 경우: 최대 14년 징역</li>
          <li>금액이 5,000달러 이하인 경우: 최대 2년 징역</li>
          <li>영구적인 범죄 기록</li>
          <li>경제적 배상</li>
          <li>향후 채용 및 신용에 대한 영향</li>
        </ul>

        <h3>사기 예방 방법</h3>
        <ul>
          <li>개인 정보를 보호하세요</li>
          <li>통신 출처를 확인하세요</li>
          <li>너무 좋아 보이는 제안은 의심하세요</li>
          <li>정기적으로 금융 명세서를 확인하세요</li>
          <li>안전한 온라인 결제 수단을 사용하세요</li>
        </ul>

        <h3>사기 혐의에 대응하는 방법</h3>
        <p>사기 사건은 종종 복잡하고 많은 증거를 수반합니다. 사기 혐의를 받는 경우 저희 법률팀은 다음과 같은 지원을 제공합니다:</p>
        <ul>
          <li>상세한 사건 분석</li>
          <li>증거 검토 및 이의 제기</li>
          <li>전문적인 방어 전략</li>
          <li>검찰과의 협상</li>
        </ul>
      `
    },
    {
      id: 3,
      date: { day: '06', month: '1월' },
      title: '위험 운전: 정의, 결과 및 예방',
      author: 'seagod',
      category: '캐나다 법',
      excerpt: '위험 운전은 공공 안전에 위협이 될 수 있는 방식으로 자동차를 운전하는 것을 의미합니다.',
      slug: 'dangerous-driving-definition',
      fullContent: `
        <h2>위험 운전의 정의</h2>
        <p>위험 운전은 공공 안전에 위협이 될 수 있는 방식으로 자동차를 운전하는 것을 의미합니다. 캐나다 형법 320.13조에 따르면 이는 심각한 형사 범죄로 분류됩니다.</p>

        <h3>위험 운전에 해당하는 상황</h3>
        <ul>
          <li>심각한 과속</li>
          <li>위험한 추월</li>
          <li>적색 신호 또는 정지 신호 위반</li>
          <li>스트리트 레이싱</li>
          <li>악천후나 열악한 도로 조건에서의 부적절한 운전</li>
          <li>무모한 운전 행위</li>
        </ul>

        <h3>법적 결과</h3>
        <p>위험 운전의 처벌은 매우 심각할 수 있습니다:</p>
        <ul>
          <li>최대 10년 징역(신체 손상을 초래한 경우 최대 14년)</li>
          <li>사망을 초래할 경우 최대 무기징역</li>
          <li>운전면허 정지</li>
          <li>범죄 기록</li>
          <li>높은 벌금</li>
          <li>보험료 대폭 상승</li>
        </ul>

        <h3>위험 운전과 관련된 다른 혐의</h3>
        <ul>
          <li>무모 운전</li>
          <li>스트리트 레이싱</li>
          <li>신체 손상을 초래한 위험 운전</li>
          <li>사망을 초래한 위험 운전</li>
        </ul>

        <h3>방어 전략</h3>
        <p>위험 운전 혐의를 받을 경우 가능한 방어 전략은 다음과 같습니다:</p>
        <ul>
          <li>운전 행위의 위험성 여부에 이의 제기</li>
          <li>증거의 적법성 검토</li>
          <li>증인 진술의 신뢰성 검토</li>
          <li>도로 및 기상 조건 고려</li>
        </ul>

        <p>저희 법률팀은 위험 운전 사건 처리 경험이 풍부하며 전문적인 법률 방어를 제공합니다.</p>
      `
    },
    {
      id: 4,
      date: { day: '06', month: '1월' },
      title: '경범죄 절도: 개념 및 결과',
      author: 'seagod',
      category: '캐나다 법',
      excerpt: '경범죄 절도는 일반적으로 5,000달러 이하의 재산을 훔치는 행위를 말합니다.',
      slug: 'petty-theft-concept-consequences',
      fullContent: `
        <h2>경범죄 절도의 정의</h2>
        <p>경범죄 절도는 일반적으로 5,000달러 이하의 가치를 가진 재산을 훔치는 행위를 말합니다. '경범죄'라는 용어가 붙었지만, 이는 여전히 심각한 형사 범죄이며 귀하의 미래에 장기적인 영향을 미칠 수 있습니다.</p>

        <h3>일반적인 경범죄 절도 상황</h3>
        <ul>
          <li>매장 절도</li>
          <li>사무실 또는 작업장 절도</li>
          <li>차량 내 물품 절도</li>
          <li>개인 재산 절도</li>
        </ul>

        <h3>법적 결과</h3>
        <p>캐나다 형법 334조에 따르면 경범죄 절도의 처벌에는 다음이 포함됩니다:</p>
        <ul>
          <li>기소될 경우 최대 2년 징역</li>
          <li>요약 심판 절차인 경우 최대 5,000달러 벌금 또는 6개월 징역</li>
          <li>범죄 기록</li>
          <li>보호 관찰
          </li>
          <li>사회 봉사</li>
        </ul>

        <h3>범죄 기록의 장기적 영향</h3>
        <p>경범죄 절도 범죄 기록은 다음에 영향을 줄 수 있습니다:</p>
        <ul>
          <li>취업 기회</li>
          <li>교육 기회</li>
          <li>미국 입국 등 여행 능력</li>
          <li>주거 신청</li>
          <li>전문 자격증 및 면허</li>
        </ul>

        <h3>초범과 재범</h3>
        <p>초범은 다음을 받을 수 있는 자격이 있을 수 있습니다:</p>
        <ul>
          <li>전환 프로그램</li>
          <li>합의 옵션</li>
          <li>경감된 처벌</li>
        </ul>
        <p>그러나 재범은 더 엄격한 처벌을 받게 됩니다.</p>

        <h3>방어 선택지</h3>
        <p>저희 변호사는 다음을 도와드릴 수 있습니다:</p>
        <ul>
          <li>혐의 취소를 모색</li>
          <li>감면된 처벌 협상</li>
          <li>대체 해결책 탐색</li>
          <li>기록 보호</li>
          <li>법정에서 효과적인 변호</li>
        </ul>
      `
    },
    {
      id: 5,
      date: { day: '06', month: '1월' },
      title: '캐나다의 가정폭력 및 폭행법 해설',
      author: 'seagod',
      category: '폭행',
      excerpt: '캐나다 법에서 가정폭력과 폭행은 어떻게 정의되는지 설명합니다.',
      slug: 'domestic-violence-assault-canada',
      fullContent: `
        <h2>캐나다 법에서의 가정폭력 및 폭행</h2>
        <p>캐나다 법은 가정폭력과 폭행에 대해 무관용 원칙을 적용합니다. 이러한 혐의는 자녀와의 접촉 상실, 거주지 상실, 범죄 기록 획득 등 삶에 광범위한 영향을 미칠 수 있습니다.</p>

        <h3>폭행 혐의의 유형</h3>
        <p>캐나다 형법에서 폭행 혐의는 여러 수준으로 구분됩니다:</p>
        <ul>
          <li><strong>일반 폭행</strong> (266조): 위협 또는 경미한 신체 접촉을 포함하는 가장 경미한 형태</li>
          <li><strong>무기 사용 또는 신체 상해를 초래한 폭행</strong> (267조): 무기를 사용하거나 실제 상해를 가하는 경우</li>
          <li><strong>가중 폭행</strong> (268조): 심각한 신체 상해, 외상 또는 생명을 위협하는 경우</li>
          <li><strong>성폭행</strong> (271-273조): 동의 없는 성적 접촉</li>
        </ul>

        <h3>가정폭력에 대한 특별 고려사항</h3>
        <p>폭행이 가족 구성원 간에 발생하면 추가 법적 결과가 적용될 수 있습니다:</p>
        <ul>
          <li>접촉 금지 명령</li>
          <li>가정 거주지 퇴거 요구</li>
          <li>자녀 양육권에 미치는 영향</li>
          <li>엄격한 보석 조건</li>
          <li>더 긴 징역형 가능성</li>
        </ul>

        <h3>처벌</h3>
        <p>폭행 처벌은 심각도에 따라 다릅니다:</p>
        <ul>
          <li><strong>일반 폭행</strong>: 최대 5년 징역</li>
          <li><strong>무기 폭행</strong>: 최대 10년 징역</li>
          <li><strong>가중 폭행</strong>: 최대 14년 징역</li>
        </ul>

        <h3>방어 전략</h3>
        <p>가정폭력 또는 폭행 혐의에 직면한 경우 가능한 방어 전략은 다음과 같습니다:</p>
        <ul>
          <li>정당방위</li>
          <li>타인을 보호하려는 행위</li>
          <li>고의성 부재</li>
          <li>허위 고소</li>
          <li>특정 상황에서의 동의</li>
          <li>증거 신뢰성에 대한 이의 제기</li>
        </ul>

        <h3>보석 및 접촉 금지 명령</h3>
        <p>가정폭력 사건에서 피고인은 일반적으로 다음과 같은 엄격한 보석 조건에 직면합니다:</p>
        <ul>
          <li>피해자와의 접촉 금지</li>
          <li>특정 장소 접근 금지</li>
          <li>여권 제출</li>
          <li>경찰에 정기적으로 보고</li>
        </ul>

        <p>저희 변호사 팀은 이러한 사건의 민감성을 이해하며, 전문성과 공감을 결합한 법률 서비스를 제공합니다.</p>
      `
    },
    {
      id: 6,
      date: { day: '27', month: '12월' },
      title: '새로운 교통법: 면허별 강화된 분심 운전 처벌',
      author: 'seagod',
      category: '분심 운전',
      excerpt: '새로운 교통법은 운전면허 등급별로 더 엄격한 분심 운전 처벌 기준을 도입합니다.',
      slug: 'new-distracted-driving-laws',
      fullContent: `
        <h2>새로운 교통법 규정</h2>
        <p>새로운 교통법은 운전면허 등급별로 더 엄격한 분심 운전 처벌 기준을 설정했습니다. 이러한 변화는 휴대전화 및 기타 전자장치 사용으로 인한 교통사고를 줄이기 위한 것입니다.</p>

        <h3>분심 운전이란?</h3>
        <p>분심 운전에는 운전 중 다음 행위가 포함됩니다:</p>
        <ul>
          <li>휴대용 무선 통신 장치(휴대전화, 태블릿) 사용</li>
          <li>엔터테인먼트 화면 열람 또는 사용</li>
          <li>휴대용 전자 엔터테인먼트 기기 보유 또는 사용</li>
          <li>GPS 프로그램 설정(합법적으로 고정되지 않은 경우)</li>
        </ul>

        <h3>면허 등급별 처벌</h3>
        
        <h4>G급 완전 면허 소지자</h4>
        <ul>
          <li><strong>1회 위반</strong>: 615~1,000달러 벌금, 3점 감점, 3일 면허 정지</li>
          <li><strong>2회 위반</strong>: 615~2,000달러 벌금, 6점 감점, 7일 면허 정지</li>
          <li><strong>3회 이상 위반</strong>: 615~3,000달러 벌금, 6점 감점, 30일 면허 정지</li>
        </ul>

        <h4>초보 면허 소지자 (G1, G2, M1, M2)</h4>
        <ul>
          <li><strong>1회 위반</strong>: 615~1,000달러 벌금, 30일 면허 정지</li>
          <li><strong>2회 위반</strong>: 615~2,000달러 벌금, 90일 면허 정지</li>
          <li><strong>3회 이상 위반</strong>: 면허 취소 및 재시험 필요</li>
        </ul>

        <h4>A부터 E급 상업 면허 소지자</h4>
        <p>상업 운전자는 G급 완전 면허 소지자와 동일한 처벌을 받지만, 위반 기록은 상업 운전 자격에 영향을 미칠 수 있습니다.</p>

        <h3>면제 조건</h3>
        <p>다음 경우에는 운전자가 전자 장치를 사용할 수 있습니다:</p>
        <ul>
          <li>비상 상황을 신고하기 위해 911에 전화할 때</li>
          <li>장치가 핸즈프리로 안전하게 고정된 경우</li>
          <li>완전히 정차되어 도로에 있지 않은 경우</li>
        </ul>

        <h3>분심 운전 티켓에 대응하는 방법</h3>
        <p>분심 운전 티켓을 받은 경우 저희가 도와드릴 수 있습니다:</p>
        <ul>
          <li>티켓의 적법성 검토</li>
          <li>집행 절차에 이의 제기</li>
          <li>사건을 뒷받침할 증거 수집</li>
          <li>법정에서 대리</li>
          <li>처벌 경감 또는 취소 시도</li>
        </ul>

        <h3>왜 티켓에 대응해야 하나요</h3>
        <ul>
          <li>감점 및 보험료 인상 방지</li>
          <li>면허 정지 방지</li>
          <li>운전 기록 보호</li>
          <li>누적 위반으로 인한 더 심각한 결과 방지</li>
        </ul>
      `
    },
    {
      id: 7,
      date: { day: '27', month: '12월' },
      title: '강화된 음주운전 처벌: 대마 합법화 이후의 도전',
      author: 'seagod',
      category: '음주 운전',
      excerpt: '대마 합법화 이후에는 술이나 대마에 취한 상태에서 운전할 때 더 엄격한 법적 결과가 뒤따릅니다.',
      slug: 'impaired-driving-cannabis-laws',
      fullContent: `
        <h2>강화된 음주운전 처벌</h2>
        <p>대마가 합법화된 이후, 술이나 대마에 취한 상태로 운전하면 심각한 법적 결과를 초래합니다. 캐나다 정부는 이 새로운 문제를 해결하기 위해 더 엄격한 음주운전 관련 법을 시행했습니다.</p>

        <h3>알코올 및 대마의 법적 한계</h3>
        
        <h4>알코올 한계</h4>
        <ul>
          <li><strong>경고 범위</strong>: 혈중 알코올 농도(BAC) 0.05-0.079</li>
          <li><strong>형사 범죄</strong>: BAC 0.08 이상</li>
        </ul>

        <h4>대마 한계</h4>
        <ul>
          <li><strong>혈액 1ml당 2나노그램</strong>: 최소 형사 기준</li>
          <li><strong>5나노그램/ml 이상</strong>: 더 엄격한 처벌</li>
          <li><strong>알코올과 대마 혼합</strong>: BAC 0.05 + THC 2.5나노그램</li>
        </ul>

        <h3>처벌 수준</h3>

        <h4>첫 번째 위반</h4>
        <ul>
          <li>최소 1,000달러 벌금</li>
          <li>최소 1년 면허 정지</li>
          <li>최대 10년 징역 가능</li>
          <li>범죄 기록</li>
          <li>점화 차단 장치 설치 의무</li>
        </ul>

        <h4>두 번째 위반</h4>
        <ul>
          <li>최소 30일 징역</li>
          <li>최소 3년 면허 정지</li>
          <li>더 높은 벌금</li>
          <li>더 긴 점화 차단 장치 요구</li>
        </ul>

        <h4>세 번째 및 이후 위반</h4>
        <ul>
          <li>최소 120일 징역</li>
          <li>최소 6년 면허 정지(종신 가능)</li>
          <li>최대 10년 징역 가능</li>
        </ul>

        <h3>신체 손상 또는 사망 발생 시</h3>
        <p>음주운전으로 인해 타인이 부상당하거나 사망하면 결과가 매우 심각합니다:</p>
        <ul>
          <li><strong>신체 손상 발생</strong>: 최대 14년 징역</li>
          <li><strong>사망 발생</strong>: 최대 무기징역</li>
        </ul>

        <h3>도로변 검사</h3>
        <p>경찰은 이제 다음 장비를 갖추고 있습니다:</p>
        <ul>
          <li>호흡측정기(알코올 검사)</li>
          <li>타액 검사 장치(대마 검사)</li>
          <li>표준화된 현장 음주운전 테스트(SFST)</li>
          <li>마약 탐지 전문가(DRE) 평가</li>
        </ul>

        <h3>의무 알코올 검사(MAS)</h3>
        <p>2018년 이후, 경찰은 의심 없이 합법적으로 정차한 운전자에게 호흡 샘플 제출을 요구할 수 있는 권한을 가집니다. 검사를 거부하는 것 자체가 형사 범죄입니다.</p>

        <h3>호흡 샘플 제공 거부</h3>
        <p>호흡, 혈액 또는 타액 샘플 제공을 거부하거나 실패하면 음주운전과 동일한 처벌을 받습니다:</p>
        <ul>
          <li>첫 번째: 최소 2,000달러 벌금</li>
          <li>두 번째: 최소 30일 징역</li>
          <li>세 번째: 최소 120일 징역</li>
        </ul>

        <h3>방어 전략</h3>
        <p>음주운전 혐의에 직면했을 때 고려할 수 있는 방어는 다음과 같습니다:</p>
        <ul>
          <li>호흡 또는 약물 검사 정확성에 이의 제기</li>
          <li>경찰 절차의 적법성 검토</li>
          <li>헌장 권리 위반 여부</li>
          <li>증거 연쇄 문제</li>
          <li>교정 및 유지 보수 기록</li>
          <li>합리적 의심의 방어</li>
        </ul>

        <h3>전문 법률 지원이 필요한 이유</h3>
        <p>음주운전 사건은 다음과 같은 요소를 포함합니다:</p>
        <ul>
          <li>복잡한 과학적 증거</li>
          <li>엄격한 절차 요건</li>
          <li>헌법적 권리 문제</li>
          <li>심각한 장기적 결과</li>
        </ul>

        <p>저희 법률팀은 알코올 및 대마 관련 사건을 포함한 음주운전 사건 처리 경험이 풍부합니다. 귀하의 권리를 보호하고 최상의 결과를 위해 노력하겠습니다.</p>
      `
    }
  ],
  vi: [
    {
      id: 1,
      date: { day: '06', month: 'Thg 1' },
      title: 'Hành vi phá hoại: Định nghĩa, Hậu quả và Ranh giới pháp lý',
      author: 'seagod',
      category: 'Chưa phân loại',
      excerpt: 'Hành vi phá hoại thường ám chỉ những hành động gây tổn hại tài sản người khác hoặc can thiệp vào đời sống của họ với mục đích giải trí hoặc ác ý.',
      slug: 'mischief-definition-consequences',
      fullContent: `
        <h2>Định nghĩa hành vi phá hoại</h2>
        <p>Hành vi phá hoại thường ám chỉ những hành động nhằm giải trí hoặc mục đích ác ý, cố ý làm hư hỏng tài sản của người khác hoặc cản trở cuộc sống bình thường của họ. Theo luật hình sự Canada, hành vi phá hoại được coi là tội phạm và có thể dẫn đến hậu quả pháp lý nghiêm trọng.</p>

        <h3>Các loại hành vi phá hoại</h3>
        <ul>
          <li>Đưa ra hành vi hủy hoại hoặc phá hủy tài sản</li>
          <li>Can thiệp vào việc sử dụng hợp pháp tài sản của người khác</li>
          <li>Cản trở, gián đoạn hoặc can thiệp vào việc sử dụng, tận hưởng hoặc vận hành hợp pháp tài sản của người khác</li>
        </ul>

        <h3>Hậu quả pháp lý</h3>
        <p>Theo Điều 430 của Bộ Luật Hình sự Canada, mức xử phạt đối với hành vi phá hoại phụ thuộc vào giá trị thiệt hại tài sản và bản chất hành vi. Các hậu quả tiềm ẩn bao gồm:</p>
        <ul>
          <li>Phạt tiền</li>
          <li>Giám sát cộng đồng</li>
          <li>Bị giam giữ (lên đến 10 năm tùy thuộc mức độ nghiêm trọng)</li>
          <li>Tiền án hình sự</li>
        </ul>

        <h3>Cách đối mặt với cáo buộc hành vi phá hoại</h3>
        <p>Nếu bạn đối mặt với cáo buộc hành vi phá hoại, việc tìm kiếm trợ giúp pháp lý chuyên nghiệp ngay lập tức là rất quan trọng. Đội ngũ luật sư của chúng tôi có thể giúp bạn:</p>
        <ul>
          <li>Đánh giá mức độ nghiêm trọng của cáo buộc</li>
          <li>Xây dựng chiến lược bào chữa hiệu quả</li>
          <li>Đại diện quyền lợi của bạn tại tòa</li>
          <li>Theo đuổi kết quả tốt nhất, bao gồm cả việc bỏ cáo buộc hoặc giảm nhẹ hình phạt</li>
        </ul>
      `
    },
    {
      id: 2,
      date: { day: '06', month: 'Thg 1' },
      title: 'Lừa đảo: Định nghĩa, Hậu quả và Phòng ngừa',
      author: 'seagod',
      category: 'Luật Canada',
      excerpt: 'Lừa đảo là hành vi cố ý lừa dối nhằm thu lợi bất chính hoặc gây thiệt hại cho người khác.',
      slug: 'fraud-definition-consequences',
      fullContent: `
        <h2>Định nghĩa lừa đảo</h2>
        <p>Lừa đảo là hành vi cố ý lừa dối nhằm thu lợi bất chính hoặc gây thiệt hại cho người khác. Ở Canada, lừa đảo được coi là một trọng tội hình sự theo Điều 380 của Bộ Luật Hình sự.</p>

        <h3>Các loại lừa đảo phổ biến</h3>
        <ul>
          <li>Ăn cắp danh tính</li>
          <li>Lừa đảo thẻ tín dụng</li>
          <li>Lừa đảo đầu tư</li>
          <li>Lừa đảo bảo hiểm</li>
          <li>Lừa đảo mạng</li>
          <li>Lừa đảo thương mại</li>
        </ul>

        <h3>Hậu quả của lừa đảo</h3>
        <p>Hình phạt đối với lừa đảo phụ thuộc vào số tiền và độ phức tạp của vụ án:</p>
        <ul>
          <li>Số tiền vượt quá 5.000 đô la: có thể bị tù đến 14 năm</li>
          <li>Số tiền không vượt quá 5.000 đô la: có thể bị tù đến 2 năm</li>
          <li>Có tiền án hình sự vĩnh viễn</li>
          <li>Phải bồi thường tài chính</li>
          <li>Ảnh hưởng đến việc làm và điểm tín dụng trong tương lai</li>
        </ul>

        <h3>Phòng ngừa lừa đảo</h3>
        <ul>
          <li>Bảo mật thông tin cá nhân</li>
          <li>Xác thực nguồn liên lạc</li>
          <li>Cảnh giác với các ưu đãi "quá tốt để là thật"</li>
          <li>Thường xuyên kiểm tra sao kê tài chính</li>
          <li>Sử dụng phương thức thanh toán trực tuyến an toàn</li>
        </ul>

        <h3>Đối mặt với cáo buộc lừa đảo</h3>
        <p>Các vụ án lừa đảo thường phức tạp và có nhiều bằng chứng. Nếu bạn bị buộc tội lừa đảo, đội ngũ luật sư của chúng tôi sẽ cung cấp:</p>
        <ul>
          <li>Phân tích vụ án chi tiết</li>
          <li>Rà soát và phản bác bằng chứng</li>
          <li>Chiến lược bào chữa chuyên nghiệp</li>
          <li>Thương lượng với công tố viên</li>
        </ul>
      `
    },
    {
      id: 3,
      date: { day: '06', month: 'Thg 1' },
      title: 'Lái xe nguy hiểm: Định nghĩa, Hậu quả và Phòng ngừa',
      author: 'seagod',
      category: 'Luật Canada',
      excerpt: 'Lái xe nguy hiểm là điều khiển phương tiện theo cách có thể đe dọa an toàn công cộng.',
      slug: 'dangerous-driving-definition',
      fullContent: `
        <h2>Định nghĩa lái xe nguy hiểm</h2>
        <p>Lái xe nguy hiểm là điều khiển phương tiện cơ giới theo cách có thể gây nguy hiểm cho an toàn công cộng. Theo Điều 320.13 của Bộ Luật Hình sự Canada, đây là một trọng tội nghiêm trọng.</p>

        <h3>Những hành vi cấu thành lái xe nguy hiểm</h3>
        <ul>
          <li>Vượt tốc độ quá mức</li>
          <li>Vượt ẩu trong làn đường</li>
          <li>Vượt đèn đỏ hoặc biển dừng</li>
          <li>Đua xe đường phố</li>
          <li>Lái xe không phù hợp trong thời tiết xấu hoặc điều kiện đường kém</li>
          <li>Hành vi lái xe liều lĩnh</li>
        </ul>

        <h3>Hậu quả pháp lý</h3>
        <p>Hình phạt đối với lái xe nguy hiểm có thể rất nghiêm trọng:</p>
        <ul>
          <li>Án tù lên đến 10 năm (tối đa 14 năm nếu gây thương tích)</li>
          <li>Án tù lên đến chung thân nếu gây tử vong</li>
          <li>Thu hồi giấy phép lái xe</li>
          <li>Tiền án hình sự</li>
          <li>Phạt nặng</li>
          <li>Phí bảo hiểm tăng cao</li>
        </ul>

        <h3>Các cáo buộc liên quan</h3>
        <ul>
          <li>Lái xe liều lĩnh</li>
          <li>Đua xe đường phố</li>
          <li>Lái xe nguy hiểm gây thương tích</li>
          <li>Lái xe nguy hiểm gây tử vong</li>
        </ul>

        <h3>Chiến lược bào chữa</h3>
        <p>Khi đối mặt với cáo buộc lái xe nguy hiểm, các chiến lược bào chữa có thể bao gồm:</p>
        <ul>
          <li>Phản bác mức độ "nguy hiểm" của hành vi lái xe</li>
          <li>Kiểm tra tính hợp pháp của bằng chứng</li>
          <li>Độ tin cậy của lời khai nhân chứng</li>
          <li>Xem xét điều kiện đường và thời tiết</li>
        </ul>

        <p>Đội ngũ pháp lý của chúng tôi có kinh nghiệm phong phú trong xử lý các vụ lái xe nguy hiểm và sẽ cung cấp bào chữa chuyên nghiệp.</p>
      `
    },
    {
      id: 4,
      date: { day: '06', month: 'Thg 1' },
      title: 'Trộm cắp vặt: Khái niệm và Hậu quả',
      author: 'seagod',
      category: 'Luật Canada',
      excerpt: 'Trộm cắp vặt thường đề cập đến việc lấy đồ giá trị không quá 5.000 đô la.',
      slug: 'petty-theft-concept-consequences',
      fullContent: `
        <h2>Định nghĩa trộm cắp vặt</h2>
        <p>Trộm cắp vặt thường ám chỉ việc đánh cắp tài sản có giá trị không quá 5.000 đô la. Mặc dù gọi là "vặt", nhưng đây vẫn là một tội hình sự nghiêm trọng có thể gây ảnh hưởng lâu dài đến tương lai của bạn.</p>

        <h3>Những tình huống trộm cắp vặt thường gặp</h3>
        <ul>
          <li>Ăn cắp tại cửa hàng</li>
          <li>Trộm cắp tại văn phòng hoặc nơi làm việc</li>
          <li>Trộm cắp từ phương tiện</li>
          <li>Trộm cắp tài sản cá nhân</li>
        </ul>

        <h3>Hậu quả pháp lý</h3>
        <p>Theo Điều 334 của Bộ Luật Hình sự Canada, hình phạt đối với trộm cắp vặt bao gồm:</p>
        <ul>
          <li>Tù lên đến 2 năm nếu truy tố theo thủ tục truy tố</li>
          <li>Phạt lên đến 5.000 đô la hoặc tù đến 6 tháng nếu xử theo thủ tục đơn giản</li>
          <li>Tiền án hình sự</li>
          <li>Xét an toàn</li>
          <li>Phục vụ cộng đồng</li>
        </ul>

        <h3>Ảnh hưởng lâu dài của tiền án hình sự</h3>
        <p>Ngay cả tiền án trộm cắp vặt cũng có thể ảnh hưởng đến:</p>
        <ul>
          <li>Cơ hội việc làm</li>
          <li>Cơ hội học tập</li>
          <li>Khả năng đi lại (đặc biệt là vào Mỹ)</li>
          <li>Đơn xin nhà ở</li>
          <li>Giấy phép và chứng chỉ chuyên môn</li>
        </ul>

        <h3>Người phạm tội lần đầu và tái phạm</h3>
        <p>Người phạm tội lần đầu có thể đủ điều kiện nhận:</p>
        <ul>
          <li>Chương trình chuyển hướng</li>
          <li>Phương án hòa giải</li>
          <li>Hình phạt nhẹ hơn</li>
        </ul>
        <p>Tuy nhiên, người tái phạm sẽ đối mặt với hình phạt nghiêm khắc hơn.</p>

        <h3>Tùy chọn bào chữa</h3>
        <p>Luật sư của chúng tôi có thể giúp bạn:</p>
        <ul>
          <li>Yêu cầu rút cáo buộc</li>
          <li>Thương lượng giảm nhẹ hình phạt</li>
          <li>Tìm kiếm giải pháp thay thế</li>
          <li>Bảo vệ lý lịch của bạn</li>
          <li>Bào chữa hiệu quả tại tòa</li>
        </ul>
      `
    },
    {
      id: 5,
      date: { day: '06', month: 'Thg 1' },
      title: 'Giải thích luật gia đình và tấn công ở Canada',
      author: 'seagod',
      category: 'Tấn công',
      excerpt: 'Giải thích cách Canada định nghĩa gia đình và tấn công theo luật pháp.',
      slug: 'domestic-violence-assault-canada',
      fullContent: `
        <h2>Gia đình và tấn công theo luật Canada</h2>
        <p>Luật Canada áp dụng chính sách không khoan nhượng đối với gia đình và tấn công. Những cáo buộc này có thể gây tác động sâu rộng đến cuộc sống của bạn, bao gồm mất quyền tiếp xúc với con cái, mất chỗ ở và có tiền án hình sự.</p>

        <h3>Các loại cáo buộc tấn công</h3>
        <p>Theo luật hình sự Canada, các cáo buộc tấn công được phân thành nhiều cấp độ:</p>
        <ul>
          <li><strong>Tấn công thông thường</strong> (Điều 266): Hình thức nhẹ nhất, bao gồm đe dọa hoặc tiếp xúc cơ thể nhẹ</li>
          <li><strong>Tấn công bằng vũ khí hoặc gây thương tích</strong> (Điều 267): Bao gồm vũ khí hoặc gây tổn thương thực tế</li>
          <li><strong>Tấn công nghiêm trọng</strong> (Điều 268): Gây thương tích nghiêm trọng, biến dạng hoặc đe dọa tính mạng</li>
          <li><strong>Tấn công tình dục</strong> (Điều 271-273): Tiếp xúc tình dục không có sự đồng ý</li>
        </ul>

        <h3>Các yếu tố đặc biệt trong gia đình</h3>
        <p>Khi tấn công xảy ra giữa các thành viên gia đình, có thể áp dụng thêm hậu quả pháp lý:</p>
        <ul>
          <li>Lệnh cấm tiếp xúc</li>
          <li>Bị yêu cầu rời khỏi nơi cư trú</li>
          <li>Ảnh hưởng đến quyền nuôi con</li>
          <li>Điều kiện bảo lãnh nghiêm ngặt hơn</li>
          <li>Có thể chịu án tù dài hơn</li>
        </ul>

        <h3>Hình phạt</h3>
        <p>Hình phạt đối với tấn công phụ thuộc vào mức độ nghiêm trọng:</p>
        <ul>
          <li><strong>Tấn công thông thường</strong>: Tối đa 5 năm tù</li>
          <li><strong>Tấn công bằng vũ khí</strong>: Tối đa 10 năm tù</li>
          <li><strong>Tấn công nghiêm trọng</strong>: Tối đa 14 năm tù</li>
        </ul>

        <h3>Chiến lược bào chữa</h3>
        <p>Khi đối mặt với cáo buộc gia đình hoặc tấn công, các bào chữa có thể bao gồm:</p>
        <ul>
          <li>Tự vệ</li>
          <li>Bảo vệ người khác</li>
          <li>Thiếu ý định</li>
          <li>Cáo buộc sai</li>
          <li>Đồng ý (trong một số trường hợp)</li>
          <li>Thách thức tính xác thực của bằng chứng</li>
        </ul>

        <h3>Bảo lãnh và lệnh cấm tiếp xúc</h3>
        <p>Trong các vụ gia đình, bị cáo thường phải đối mặt với điều kiện bảo lãnh nghiêm ngặt, bao gồm:</p>
        <ul>
          <li>Không được tiếp xúc với nạn nhân</li>
          <li>Không được đến những địa điểm cụ thể</li>
          <li>Giao nộp hộ chiếu</li>
          <li>Báo cáo thường xuyên với cảnh sát</li>
        </ul>

        <p>Đội ngũ luật sư của chúng tôi hiểu tính nhạy cảm của những vụ việc này và sẽ cung cấp dịch vụ pháp lý kết hợp giữa sự thấu cảm và chuyên môn.</p>
      `
    },
    {
      id: 6,
      date: { day: '27', month: 'Thg 12' },
      title: 'Luật giao thông mới: Tăng nặng xử phạt lái xe mất tập trung cho tài xế có giấy phép',
      author: 'seagod',
      category: 'Lái xe mất tập trung',
      excerpt: 'Luật giao thông mới thiết lập tiêu chuẩn xử phạt khắt khe hơn cho lái xe mất tập trung theo từng cấp giấy phép.',
      slug: 'new-distracted-driving-laws',
      fullContent: `
        <h2>Quy định luật giao thông mới</h2>
        <p>Luật giao thông mới đã áp dụng tiêu chuẩn xử phạt khắt khe hơn đối với lái xe mất tập trung cho các cấp giấy phép khác nhau. Những thay đổi này nhằm giảm tai nạn giao thông do sử dụng điện thoại và thiết bị điện tử khác.</p>

        <h3>Lái xe mất tập trung là gì</h3>
        <p>Lái xe mất tập trung bao gồm khi điều khiển phương tiện:</p>
        <ul>
          <li>Sử dụng thiết bị truyền thông cầm tay (điện thoại, máy tính bảng)</li>
          <li>Xem hoặc sử dụng màn hình giải trí</li>
          <li>Cầm hoặc sử dụng thiết bị giải trí điện tử</li>
          <li>Cài đặt GPS (trừ khi gắn cố định hợp pháp)</li>
        </ul>

        <h3>Xử phạt theo cấp giấy phép</h3>
        
        <h4>Người giữ giấy phép đầy đủ (G)</h4>
        <ul>
          <li><strong>Vi phạm đầu tiên</strong>: Phạt 615-1,000 đô la, trừ 3 điểm, tạm giữ giấy phép 3 ngày</li>
          <li><strong>Vi phạm thứ hai</strong>: Phạt 615-2,000 đô la, trừ 6 điểm, tạm giữ giấy phép 7 ngày</li>
          <li><strong>Vi phạm thứ ba trở lên</strong>: Phạt 615-3,000 đô la, trừ 6 điểm, tạm giữ giấy phép 30 ngày</li>
        </ul>

        <h4>Người giữ giấy phép mới (G1, G2, M1, M2)</h4>
        <ul>
          <li><strong>Vi phạm đầu tiên</strong>: Phạt 615-1,000 đô la, tạm giữ giấy phép 30 ngày</li>
          <li><strong>Vi phạm thứ hai</strong>: Phạt 615-2,000 đô la, tạm giữ giấy phép 90 ngày</li>
          <li><strong>Vi phạm thứ ba trở lên</strong>: Hủy giấy phép, phải thi lại</li>
        </ul>

        <h4>Người giữ giấy phép thương mại (hạng A-E)</h4>
        <p>Lái xe thương mại chịu cùng mức xử phạt như người giữ giấy phép đầy đủ G, nhưng hồ sơ vi phạm có thể ảnh hưởng đến tư cách lái xe thương mại của họ.</p>

        <h3>Trường hợp ngoại lệ</h3>
        <p>Lái xe có thể sử dụng thiết bị điện tử trong những trường hợp sau:</p>
        <ul>
          <li>Gọi 911 báo cáo tình huống khẩn cấp</li>
          <li>Thiết bị được gắn cố định cách an toàn và rảnh tay</li>
          <li>Đã dừng xe hoàn toàn và không ở trên đường</li>
        </ul>

        <h3>Cách chống lại vé lái xe mất tập trung</h3>
        <p>Nếu bạn nhận vé lái xe mất tập trung, chúng tôi có thể giúp bạn:</p>
        <ul>
          <li>Xem xét tính hợp pháp của vé</li>
          <li>Thách thức thủ tục thi hành</li>
          <li>Tập hợp bằng chứng hỗ trợ</li>
          <li>Đại diện bạn tại tòa</li>
          <li>Đề nghị giảm nhẹ hoặc hủy phạt</li>
        </ul>

        <h3>Tại sao phải chống lại vé</h3>
        <ul>
          <li>Tránh bị trừ điểm và tăng phí bảo hiểm</li>
          <li>Ngăn ngừa tạm giữ giấy phép</li>
          <li>Bảo vệ hồ sơ lái xe</li>
          <li>Tránh hậu quả nghiêm trọng hơn do vi phạm tích lũy</li>
        </ul>
      `
    },
    {
      id: 7,
      date: { day: '27', month: 'Thg 12' },
      title: 'Tăng nặng xử phạt lái xe không tỉnh táo: Thách thức sau khi hợp pháp hóa cần sa',
      author: 'seagod',
      category: 'Lái xe say rượu',
      excerpt: 'Sau khi cần sa được hợp pháp hóa, lái xe sau khi uống rượu hoặc dùng cần sa đều phải chịu hậu quả pháp lý nghiêm trọng.',
      slug: 'impaired-driving-cannabis-laws',
      fullContent: `
        <h2>Tăng nặng xử phạt lái xe không tỉnh táo</h2>
        <p>Sau khi cần sa được hợp pháp hóa, dù lái xe sau khi uống rượu hay dùng cần sa, bạn vẫn phải đối mặt với hậu quả pháp lý nghiêm trọng. Chính phủ Canada đã ban hành luật lái xe không tỉnh táo nghiêm ngặt hơn để ứng phó với thách thức mới này.</p>

        <h3>Giới hạn pháp lý đối với rượu và cần sa</h3>
        
        <h4>Giới hạn rượu</h4>
        <ul>
          <li><strong>Phạm vi cảnh báo</strong>: Nồng độ cồn trong máu (BAC) 0.05-0.079</li>
          <li><strong>Tội hình sự</strong>: BAC 0.08 trở lên</li>
        </ul>

        <h4>Giới hạn cần sa</h4>
        <ul>
          <li><strong>2 nanogram/ml máu</strong>: ngưỡng hình sự tối thiểu</li>
          <li><strong>5 nanogram/ml trở lên</strong>: xử phạt nghiêm trọng hơn</li>
          <li><strong>Hỗn hợp rượu và cần sa</strong>: BAC 0.05 + THC 2.5 nanogram</li>
        </ul>

        <h3>Cấp độ xử phạt</h3>

        <h4>Vi phạm đầu tiên</h4>
        <ul>
          <li>Phạt tối thiểu 1.000 đô la</li>
          <li>Treo bằng ít nhất 1 năm</li>
          <li>Có thể bị giam giữ (tối đa 10 năm)</li>
          <li>Tiền án hình sự</li>
          <li>Bắt buộc lắp đặt thiết bị khóa đánh lửa</li>
        </ul>

        <h4>Vi phạm thứ hai</h4>
        <ul>
          <li>Phạt tù tối thiểu 30 ngày</li>
          <li>Treo bằng ít nhất 3 năm</li>
          <li>Phạt cao hơn</li>
          <li>Yêu cầu lắp khóa đánh lửa dài hơn</li>
        </ul>

        <h4>Vi phạm thứ ba trở lên</h4>
        <ul>
          <li>Phạt tù tối thiểu 120 ngày</li>
          <li>Treo bằng ít nhất 6 năm (có thể suốt đời)</li>
          <li>Có thể bị phạt tù lên đến 10 năm</li>
        </ul>

        <h3>Gây thương tích hoặc tử vong</h3>
        <p>Nếu lái xe không tỉnh táo gây thương tích hoặc tử vong cho người khác, hậu quả sẽ cực kỳ nghiêm trọng:</p>
        <ul>
          <li><strong>Gây thương tích</strong>: Tối đa 14 năm tù</li>
          <li><strong>Gây tử vong</strong>: Tối đa chung thân</li>
        </ul>

        <h3>Kiểm tra bên đường</h3>
        <p>Hiện nay cảnh sát được trang bị:</p>
        <ul>
          <li>Máy kiểm tra hơi thở (phát hiện rượu)</li>
          <li>Thiết bị kiểm tra nước bọt (phát hiện cần sa)</li>
          <li>Kiểm tra tỉnh táo tiêu chuẩn trên đường (SFST)</li>
          <li>Đánh giá của Chuyên gia nhận diện thuốc (DRE)</li>
        </ul>

        <h3>Kiểm tra rượu bắt buộc (MAS)</h3>
        <p>Kể từ năm 2018, cảnh sát có quyền yêu cầu mẫu hơi thở từ bất kỳ tài xế nào được dừng xe hợp pháp, ngay cả khi không có dấu hiệu nghi ngờ. Từ chối kiểm tra tự thân là một hành vi hình sự.</p>

        <h3>Từ chối cung cấp mẫu hơi thở</h3>
        <p>Hình phạt cho việc từ chối hoặc không cung cấp mẫu hơi thở, máu hoặc nước bọt tương đương với lái xe không tỉnh táo:</p>
        <ul>
          <li>Lần đầu: Phạt tối thiểu 2.000 đô la</li>
          <li>Lần hai: Phạt tù tối thiểu 30 ngày</li>
          <li>Lần ba: Phạt tù tối thiểu 120 ngày</li>
        </ul>

        <h3>Chiến lược bào chữa</h3>
        <p>Khi đối mặt với cáo buộc lái xe không tỉnh táo, các chiến lược bào chữa có thể bao gồm:</p>
        <ul>
          <li>Phản bác độ chính xác của xét nghiệm hơi thở hoặc ma túy</li>
          <li>Kiểm tra tính hợp pháp của thủ tục cảnh sát</li>
          <li>Vi phạm Hiến chương Quyền lợi</li>
          <li>Vấn đề chuỗi bằng chứng</li>
          <li>Hồ sơ hiệu chuẩn và bảo trì</li>
          <li>Bào chữa nghi ngờ hợp lý</li>
        </ul>

        <h3>Tại sao cần trợ giúp pháp lý chuyên nghiệp</h3>
        <p>Các vụ án lái xe không tỉnh táo liên quan đến:</p>
        <ul>
          <li>Bằng chứng khoa học phức tạp</li>
          <li>Yêu cầu thủ tục nghiêm ngặt</li>
          <li>Các vấn đề về quyền hiến pháp</li>
          <li>Hậu quả lâu dài nghiêm trọng</li>
        </ul>

        <p>Đội ngũ luật sư của chúng tôi có kinh nghiệm phong phú trong các vụ án lái xe không tỉnh táo, bao gồm cả các vụ liên quan đến rượu và cần sa. Chúng tôi sẽ bảo vệ quyền lợi của bạn và theo đuổi kết quả tốt nhất có thể.</p>
      `
    }
  ]
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
