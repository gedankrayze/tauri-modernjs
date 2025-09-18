import { Card, Space, Typography, List, Row, Col, Statistic, Progress } from 'antd';
import {
  BellRing,
  CheckCircle2,
  Rocket,
  Gauge,
  TrendingUp,
  Activity,
  Zap,
  Shield,
  Database
} from 'lucide-react';
import type { ReactNode } from 'react';
import useAppStore from '@/stores/appStore';

type QuickAction = {
  key: string;
  title: string;
  description: string;
  icon: ReactNode;
};

type StatCard = {
  title: string;
  value: number;
  suffix?: string;
  prefix?: string;
  icon: ReactNode;
  color: string;
  trend?: number;
};

const quickActions: QuickAction[] = [
  {
    key: 'rust-integration',
    title: 'Rust Integration',
    description: 'Seamless communication between React frontend and Tauri backend with type-safe commands.',
    icon: <Rocket size={20} strokeWidth={2.6} />
  },
  {
    key: 'state-management',
    title: 'State Management',
    description: 'Persistent state with Zustand, including theme preferences and application settings.',
    icon: <Gauge size={20} strokeWidth={2.6} />
  },
  {
    key: 'modern-ui',
    title: 'Modern UI Framework',
    description: 'Built with Modern.js and Ant Design for professional desktop application experience.',
    icon: <Zap size={20} strokeWidth={2.6} />
  },
  {
    key: 'security',
    title: 'Native Security',
    description: 'Leverages Tauri\'s security model with restricted APIs and sandboxed execution.',
    icon: <Shield size={20} strokeWidth={2.6} />
  }
];

const stats: StatCard[] = [
  {
    title: 'Performance Score',
    value: 98,
    suffix: '%',
    icon: <TrendingUp size={24} />,
    color: '#10b981',
    trend: 5.2
  },
  {
    title: 'Memory Usage',
    value: 45,
    suffix: 'MB',
    icon: <Activity size={24} />,
    color: '#3b82f6',
    trend: -2.1
  },
  {
    title: 'Active Sessions',
    value: 1,
    icon: <Database size={24} />,
    color: '#f59e0b'
  },
  {
    title: 'Uptime',
    value: 99.9,
    suffix: '%',
    icon: <Shield size={24} />,
    color: '#10b981'
  }
];

export const DashboardContent: React.FC = () => {
  const { lastGreeting } = useAppStore();

  return (
    <div className="dashboard-content">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <div>
          <Typography.Title level={2} style={{ marginBottom: 8 }}>
            Dashboard Overview
          </Typography.Title>
          <Typography.Text type="secondary">
            Monitor your application performance and system status
          </Typography.Text>
        </div>

        <Row gutter={[24, 24]}>
          {stats.map((stat, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <Card className="stat-card">
                <div className="stat-card__content">
                  <div className="stat-card__icon" style={{ color: stat.color }}>
                    {stat.icon}
                  </div>
                  <div className="stat-card__data">
                    <Statistic
                      title={stat.title}
                      value={stat.value}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                      valueStyle={{ fontSize: '24px', fontWeight: 700 }}
                    />
                    {stat.trend && (
                      <div className={`stat-trend ${stat.trend > 0 ? 'positive' : 'negative'}`}>
                        {stat.trend > 0 ? '↗' : '↘'} {Math.abs(stat.trend)}%
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <Row gutter={[24, 24]}>
          <Col xs={24} lg={16}>
            <Card
              className="feature-card"
              title={
                <Space>
                  <BellRing size={20} strokeWidth={2.4} />
                  <span>Platform Features</span>
                </Space>
              }
            >
              <Typography.Paragraph style={{ marginBottom: 24 }}>
                This Modern.js + Tauri application showcases desktop-native capabilities with web technologies.
                Explore the integrated features below.
              </Typography.Paragraph>
              <List
                className="feature-list"
                dataSource={quickActions}
                renderItem={(item) => (
                  <List.Item key={item.key} className="feature-item">
                    <List.Item.Meta
                      avatar={<div className="feature-icon">{item.icon}</div>}
                      title={<Typography.Text strong>{item.title}</Typography.Text>}
                      description={item.description}
                    />
                  </List.Item>
                )}
              />
            </Card>
          </Col>

          <Col xs={24} lg={8}>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <Card
                className="activity-card"
                title={
                  <Space>
                    <CheckCircle2 size={20} strokeWidth={2.4} />
                    <span>Latest Activity</span>
                  </Space>
                }
              >
                <div className="activity-content">
                  <div className="activity-icon">
                    <CheckCircle2 size={24} strokeWidth={2.6} />
                  </div>
                  <div className="activity-details">
                    <Typography.Text strong>Rust Command Response</Typography.Text>
                    <Typography.Paragraph className="activity-message">
                      {lastGreeting || 'Click "Run greet" to test the Rust integration and see the response here.'}
                    </Typography.Paragraph>
                  </div>
                </div>
              </Card>

              <Card title="System Health" className="health-card">
                <Space direction="vertical" style={{ width: '100%' }}>
                  <div>
                    <Typography.Text>CPU Usage</Typography.Text>
                    <Progress percent={23} strokeColor="#10b981" size="small" />
                  </div>
                  <div>
                    <Typography.Text>Memory</Typography.Text>
                    <Progress percent={45} strokeColor="#3b82f6" size="small" />
                  </div>
                  <div>
                    <Typography.Text>Storage</Typography.Text>
                    <Progress percent={67} strokeColor="#f59e0b" size="small" />
                  </div>
                </Space>
              </Card>
            </Space>
          </Col>
        </Row>
      </Space>
    </div>
  );
};