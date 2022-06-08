import React from 'react';
import { Typography } from 'antd';

type Props = {};

const { Title, Text } = Typography;

const About = (props: Props) => {
  return (
    <div>
      <Title>듣플만 (듣기시험 플레이리스트 만들기)</Title>
      <Title level={2}>프로젝트 시작 이유</Title>
      <ul>
        <li>
          예전에 선생님으로 일하면서 듣기 시험 문제를 만들 때 음성 편집이 너무
          귀찮고 단순 반복이 많았습니다.
        </li>
        <li>
          그래서 쉽게 듣기 시험 mp3 파일을 만들 수 있으면 좋겠다고 생각했습니다.
        </li>
        <li>
          youtube에 각 문제의 음성 파일을 올리고 '번호', '다시 한 번 들으세요.'
          같은 문구는 자동으로 넣어주면 좋겠다고 생각했습니다.
        </li>
        <li>
          그리고 문제 사이의 시간 설정도 자동으로 일정하게 넣어줄 수 있으면
          좋겠다고 생각했습니다.
        </li>
        <li>
          그래서 쉽게 만들 수 있는 듣기 시험 플레이리스트 만들기 프로젝트를
          시작하게 되었습니다.
        </li>
      </ul>
      <Title level={2}>기능</Title>
      <ul>
        <li>youtube에 있는 음성 파일로 플레이리스트를 만들 수 있습니다.</li>
        <li>
          음성 파일에 번호를 매칭하면 '듣플만'에서 알아서 번호를 읽어 줍니다.
        </li>
        <li>한 문제당 음성 파일의 반복 횟수를 정할 수 있습니다.</li>
        <li>문자 사이의 시간 간격을 설정할 수 있습니다.</li>
        <li>
          만든 듣기시험 플레이리스트를 재생, 일시정지, 다시듣기, 다음으로
          넘어가기, 이전으로 돌아가기 등 여러 재생 기능을 사용할 수 있습니다.
        </li>
      </ul>
      <Title level={2}>문의</Title>
      <Text>
        이메일 : <a href="mailto:malgolil41@gmail.com">malgolil41@gmail.com</a>
      </Text>
    </div>
  );
};

export default About;
