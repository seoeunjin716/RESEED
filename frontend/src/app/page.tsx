'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sprout, Wind, Leaf, Droplet, Brain, ArrowRight } from 'lucide-react';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // 자동으로 대시보드로 리다이렉트 (선택사항)
    // router.push('/dashboard');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-seed-50 via-white to-hydrogen-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Sprout className="h-24 w-24 text-seed-500 animate-leaf-sway" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-hydrogen-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-seed-600 to-hydrogen-500 bg-clip-text text-transparent">
              RE:SEED
            </span>
          </h1>
          
          <p className="text-3xl font-semibold text-gray-700 mb-4">
            제주 듀얼 탄소감축 플랫폼
          </p>
          
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            재생에너지 잉여전력과 바이오차를 결합한<br />
            차세대 탄소중립 통합 솔루션
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-4 mb-16">
            <Button
              size="lg"
              onClick={() => router.push('/dashboard')}
              className="bg-seed-500 hover:bg-seed-600 text-white px-8 py-6 text-lg shadow-lg"
            >
              대시보드 시작하기
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => router.push('/about')}
              className="border-seed-500 text-seed-600 hover:bg-seed-50 px-8 py-6 text-lg"
            >
              프로젝트 소개
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <FeatureCard
              icon={<Wind className="h-8 w-8 text-hydrogen-500" />}
              title="RE100"
              description="재생에너지 최적화"
              onClick={() => router.push('/renewable-energy')}
            />
            <FeatureCard
              icon={<Leaf className="h-8 w-8 text-seed-500" />}
              title="Biochar"
              description="바이오차 CCUS"
              onClick={() => router.push('/biochar')}
            />
            <FeatureCard
              icon={<Droplet className="h-8 w-8 text-hydrogen-400" />}
              title="Green H₂"
              description="그린수소 생산"
              onClick={() => router.push('/green-hydrogen')}
            />
            <FeatureCard
              icon={<Brain className="h-8 w-8 text-purple-500" />}
              title="AI 최적화"
              description="LCA & 스케줄링"
              onClick={() => router.push('/ai-optimization')}
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <StatCard
              value="770.7"
              unit="MW"
              label="현재 발전량"
              color="text-hydrogen-500"
            />
            <StatCard
              value="125"
              unit="톤 CO₂"
              label="바이오차 탄소저장"
              color="text-seed-500"
            />
            <StatCard
              value="87"
              unit="점"
              label="Dual Carbon Score"
              color="text-purple-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}

function FeatureCard({ icon, title, description, onClick }: FeatureCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-seed-300"
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">{icon}</div>
        <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}

interface StatCardProps {
  value: string;
  unit: string;
  label: string;
  color: string;
}

function StatCard({ value, unit, label, color }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <div className="text-center">
        <div className={`text-4xl font-bold ${color} mb-2`}>
          {value} <span className="text-2xl">{unit}</span>
        </div>
        <div className="text-sm text-gray-600">{label}</div>
      </div>
    </div>
  );
}
