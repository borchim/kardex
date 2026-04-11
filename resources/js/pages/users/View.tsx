import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useTranslation } from 'react-i18next';
import { User } from 'lucide-react';

interface ViewProps {
    user: any;
}

export default function View({ user }: ViewProps) {
    const { t } = useTranslation();

    const getStatusColor = (status: string) => {
        const colors: Record<string, string> = {
            'active': 'bg-green-100 text-green-800',
            'inactive': 'bg-red-100 text-red-800'
        };
        return colors[status] || 'bg-gray-100 text-gray-800';
    };

    const formatDate = (dateString: string) => {
        return window.superAdminSettings?.formatDateTime(dateString, true) ||
            window.appSettings?.formatDateTime(dateString, true) ||
            new Date(dateString).toLocaleDateString();
    };

    return (
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader className="pb-4 border-b">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                        <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                        <DialogTitle className="text-xl font-semibold">{t('User Details')}</DialogTitle>
                    </div>
                </div>
            </DialogHeader>

            <div className="overflow-y-auto flex-1 p-4 space-y-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">{t('Name')}</label>
                    <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{user.name}</p>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">{t('Email')}</label>
                    <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{user.email}</p>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">{t('Roles')}</label>
                    <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">
                        {user.roles.map((role: any) => role.label || role.name).join(', ')}
                    </p>
                </div>
            </div>
        </DialogContent>
    );
}
